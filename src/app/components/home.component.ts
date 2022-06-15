import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h1>Welcome to the world of {{name}}!!</h1>`,
  styles: [`h1{
    color: green;
    text-align: center;
    margin-top: 150px;
    font-style: italic;
  }`]
})
export class HomeComponent {
  name = 'Angular';
}
