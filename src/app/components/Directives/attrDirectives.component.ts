import { Component, Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-myapp',
  styles: [`
    .txt-blue {color: blue}
    .txt-red {color: red}
    p {margin: 0px 20px; padding: 5px; border: 1px solid; font-weight: bold;}
    `
  ],
  template: `
    <h2> Builtin Attribute examples </h2>
    <h3 [ngClass]="txtColor"> ngClass and 
      <span [ngStyle]="{'font-style': 'italic'}"> ngStyle </span>
      <span [ngStyle]="{'color': getColor(), 'font-weight': 'bold'}">are example of Builtin Attribute Directives</span>
    </h3><br>
  
    <h2> Custom Attribute examples </h2>
    <p my-directive> my 1st custom Attribute </p>
    <p my-better-directive> Better Custom Attribute using Renderer </p>
    <p my-directive-listener> Custom Attribute with HostListener & Renderer2 </p>
    <p my-directive-hostbinding> Custom Attribute with HostListener & HosteBinding </p><br>

    <p my-directive-parampassing='yellow' defaultColor='red'> Param passing to my directive 1st way</p>
    <p [my-directive-parampassing]="'yellow'" [defaultColor]="'red'"> Param passing to my directive 2nd way</p>
    <p my-directive-parampassing [my-directive-parampassing]="'yellow'" [defaultColor]="'red'"> Param passing to my directive 3rd way</p>

  `
})
export class AttrDirectiveComponent {
  txtColor = 'txt-blue';
  getColor(): string {return 'red'}
}

// directive set directly to native element in DOM
 @Directive({
  selector:'[my-directive]'
 })
 export class myDirective implements OnInit{
  constructor(private elmRef: ElementRef){}
  ngOnInit(){
    this.elmRef.nativeElement.style.backgroundColor = 'green';
  }
 }

 // directive set through renderer. It's solved 'element not found' issue in runtime for few cases
 @Directive({selector:'[my-better-directive]'})
 export class myBetterDirective implements OnInit{
  constructor(private elmRef: ElementRef, private rend: Renderer2){}
  ngOnInit(){
    this.rend.setStyle(this.elmRef.nativeElement, 'background-color', 'blue');
  }
 }

 // buind using Host Listener 
 @Directive({selector:'[my-directive-listener]'})
 export class myDirectiveListener{
  constructor(private elmRef: ElementRef, private rend: Renderer2){}

  @HostListener('mouseover') myMouseOver(evenD: Event){
    this.rend.setStyle(this.elmRef.nativeElement, 'background-color', 'yellow');
  }
  @HostListener('mouseleave') myMouseOut(evenD: Event){
    this.rend.setStyle(this.elmRef.nativeElement, 'background-color', 'orange');
  }
 }

 // buind using HostBuinding & HostListener is much more easy for our scenario
 @Directive({ selector:'[my-directive-hostbinding]'})
 export class myDirectiveHostBuinging{
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  @HostListener('mouseover') myMouseOver(evenD: Event){this.backgroundColor = 'yellow';}
  @HostListener('mouseleave') myMouseOut(evenD: Event){this.backgroundColor= 'orange';}
 }

 // input param passing to our directive
 @Directive({ selector:'[my-directive-parampassing]'})
 export class myParamPassingDirective{
  @Input() defaultColor: string = 'transparent';
  @Input('my-directive-parampassing') heighlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;

  @HostListener('mouseover') myMouseOver(evenD: Event){this.backgroundColor = this.heighlightColor;}
  @HostListener('mouseleave') myMouseOut(evenD: Event){this.backgroundColor= this.defaultColor;}
 }