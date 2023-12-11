import { Component, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-myapp',
  template: `
    <h3> Angular ngIf demo </h3>
      <div *ngIf="isValid"> isValid variable value is 'true' </div>
      <ng-template [ngIf]="!isValid">
        <div> isValid variable value is 'false' (behind the *ngIf) </div>
      </ng-template>

      <div *ngIf="isValid; else else_content"> "If" content here </div>
      <ng-template #else_content> "Else" content here </ng-template><br>

      <div *ngIf="isValid; then thenBlock else elseBlock"></div>
        <ng-template #thenBlock>
          "If" content here through ThenBlock
        </ng-template>
        <ng-template #elseBlock>
          "Else" content here through ElseBlock
        </ng-template><br><br>

      <div>ngTemplateOutlet example<p *ngTemplateOutlet="else_content"></p></div><br>
      
    <h3> Angular ngFor demo </h3>
      <!-- <ul><li *ngFor="let item of items; let i=index"> Index {{i}} item is {{item}}</li></ul><br> -->
      <ul><li *ngFor="let item of items; index as i; first as f"> 
        Index {{i}} item -  First {{f}} |
        <span style="color: red">{{item.item}}</span> <span>{{item.itemvalue}}</span> </li>
      </ul><br>

    <h3> Angular ngSwitch demo </h3>
      <button (click)="value=1" type="button" class="btn btn-primary"> Select - 1 </button>
      <button (click)="value=2" type="button" class="btn btn-primary"> Select - 2 </button>
      <button (click)="value=3" type="button" class="btn btn-primary"> Select - 3 </button>
      <button (click)="value=156+4" type="button" class="btn btn-primary"> Default </button>
      <div [ngSwitch]="value">
        <div *ngSwitchCase="1">A. Template - Value={{value}}</div>
        <div *ngSwitchCase="2">B. Template - Value={{value}}</div>
        <div *ngSwitchCase="3">C. Template - Value={{value}}</div>
        <div *ngSwitchDefault>Default Template - Value not equals to 1, 2, 3</div>
      </div><br>

    <h3> My Custom Structural Directive </h3>
      <p *appUnless="myValid"> my custom condition </p>

  `
})
export class SrtucturalDirectiveComponent {
  value = 0;
  isValid = false;
  myValid = true;
  items = [
    {item: 'index: number', itemvalue: ': The index of the current item in the iterable.'},
    {item: 'count: number', itemvalue: ': The length of the iterable.'},
    {item: 'first: boolean', itemvalue: ': True when the item is the first item in the iterable.'},
    {item: 'last: boolean', itemvalue: ': True when the item is the last item in the iterable.'},
    {item: 'even: boolean', itemvalue: ': True when the item has an even index in the iterable.'},
    {item: 'odd: boolean', itemvalue: ': True when the item has an odd index in the iterable.'}    
  ];
}

// Custom structural Directive
@Directive({
  selector: '[appUnless]'
})
export class MyConditionDirective{
  constructor(private tmplRef: TemplateRef<any>, private vcRef: ViewContainerRef){}

  @Input() set appUnless(condition: boolean){
    if(condition){
      this.vcRef.createEmbeddedView(this.tmplRef);
    } else {
      this.vcRef.clear();
    }
  }
}