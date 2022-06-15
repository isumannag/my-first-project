import { Component } from '@angular/core';

@Component({
  selector: 'app-myapp',
  template: `
    <h3> Angular ngIf demo </h3>
      <p *ngIf="isValid"> isValid variable value is 'true' </p>
      <p *ngIf="!isValid"> isValid variable value is 'false' </p>

      <div *ngIf="isValid; else else_content"> "If" content here </div>
      <ng-template #else_content> "Else" content here </ng-template><br>
      
    <h3> Angular ngFor demo </h3>
      <ul><li *ngFor="let item of items; let i=index"> Index {{i}} item is {{item}}</li></ul><br>

    <h3> Angular ngSwitch demo </h3>
      <button (click)="value=1"> Select - 1 </button>
      <button (click)="value=2"> Select - 2 </button>
      <button (click)="value=3"> Select - 3 </button>
      <button (click)="value=156+4"> Default </button>
      <div [ngSwitch]="value">
        <div *ngSwitchCase="1">A. Template - Value={{value}}</div>
        <div *ngSwitchCase="2">B. Template - Value={{value}}</div>
        <div *ngSwitchCase="3">C. Template - Value={{value}}</div>
        <div *ngSwitchDefault>Default Template - Value not equals to 1, 2, 3</div>
      </div>

  `
})
export class SrtucturalDirectiveComponent {
  value = 0;
  isValid = false;
  items = ['First', 'Second', 'Third'];
}
