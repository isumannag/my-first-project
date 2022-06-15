import { Component } from '@angular/core';

@Component({
  selector: 'app-myapp',
  styles: [`
    .txt-blue {color: blue}
    .txt-red {color: red}`
  ],
  template: `
    <h2> Builtin Attribute examples </h2>
    <h3 [ngClass]="txtColor"> ngClass and 
      <span [ngStyle]="{'font-style': 'italic'}"> ngStyle </span>
      <span [ngStyle]="{'color': getColor(), 'font-weight': 'bold'}">are example of Builtin Attribute Directives</span>
    </h3><br>
    
    <h2> Custom Attribute examples </h2>

  `
})
export class AttrDirectiveComponent {
  txtColor = 'txt-blue';
  getColor(): string {return 'red'}
}
