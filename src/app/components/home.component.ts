import { Component } from '@angular/core';

@Component({
  selector: 'app-home',       // By Element Itself (default)
  // selector: '[app-home]',  // By Attribute
  // selector: '.app-home',   // By class
  template: `
  <p><b>Below are the list of things we have created using {{name}}:</b></p>
  <p>1. ng new my-first-project <br>
     2. ng g c Home <br>
     3. npm install bootstrap --save <br>
     is the commend to include bootstrap in Angular application. Also we need to add below code in <b>angular.json</b>.<br>
     "styles": [
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "src/styles.css"
      ] <br>
     4. Component Selector in Angular <br> 
      selector: 'app-home' (Default Element Selector)<br> 
      selector: '[app-home]' (Attribute Selector)<br> 
      selector: '.app-home', (Class Selector)<br> 
  </p>

  `,
  styles: [`b{
    color: blue;
    margin-top: 150px;
  }`]
})
export class HomeComponent {
  name = 'CLI commend';
}
