import { Component, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-myapp',
  template: `
    <h3> Angular ngIf demo </h3>
      <p *ngIf="isValid"> isValid variable value is 'true' </p>
      <ng-template [ngIf]="!isValid">
        <p> isValid variable value is 'false' (behind the *ngIf) </p>
      </ng-template>

      <div *ngIf="isValid; else else_content"> "If" content here </div>
      <ng-template #else_content> "Else" content here </ng-template><br><br>

      <div>ngTemplateOutlet example<p *ngTemplateOutlet="else_content"></p></div><br>
      
    <h3> Angular ngFor demo </h3>
      <ul><li *ngFor="let item of items; let i=index"> Index {{i}} item is {{item}}</li></ul><br>

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
  items = ['First', 'Second', 'Third'];
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