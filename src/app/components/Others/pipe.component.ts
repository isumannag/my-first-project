import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-myapp',
  template: `
  <h1> Pipe Examples </h1>
    <h2> Custom Pipe </h2>
      <p> Formatted Date using custom pipe:  {{date|formatCustomDate}} </p>
      <p> Without Formatted Date:  {{date}}</p>

    <h2> BuiltIn Pipe </h2>
      <p>{{message|uppercase}}</p>
  `
})
export class PipeComponent {
  date = Number(new Date());
  message = 'My Message is in uppercase using builtin pipe!';
}

@Pipe({'name': 'formatCustomDate'})
export class FormattedPipeExample implements PipeTransform {
  transform(value: any, args?: any) {
    const myDate = new Date (parseInt(value, 10));
    return myDate.toDateString();
  }
}