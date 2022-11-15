import { Component} from '@angular/core';

@Component({
  selector: 'app-myapp',
  template: `
  <h2> There are 4 type of binding in Angular </h2>
  <p><b>1. String Interpolation:</b> {{value1}}<br>
     <span [innerHTML]="value2"></span> <br>
     <span (click)="methodName()"><b>3. Event Binding:</b> (click)="methodName()"</span><br>
     <span><b>4. Twoway Data Binding:</b> [(ngModel)]="variableName"</span><br>
     Input from View: <input [(ngModel)]="value3"/><br>
     Output to View: {{value3}}
  </p>
  `
})
export class BindingComponent {
  value1 = '{{Variable Name}}';
  value2 = '<b>2. Property Binding:</b> [propertyName]="variableName"';
  value3 = 'default value';
  public methodName: any = () => alert('Clicked!!');
}