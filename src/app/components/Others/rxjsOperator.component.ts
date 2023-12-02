import { Component} from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-myapp',
  template: `
  <h3> Subject vs ReplaySubject vs BehaviorSubject Examples </h3>
  <button class="btn btn-primary" (click)="emitMyData()">Emit</button>
  <button class="btn btn-primary" (click)="getMyData()">Subscribe</button>
  <div>
    <span>Emited data:{{mySubhect | async}}</span>   
    || Sunscribed data:<span *ngFor="let data of dataArray">{{data}}, </span>
  </div><br><br>

  <h3> MergeMap vs ConcatMap vs SwitchMap vs ExhaustMap Examples </h3>

    
  `
})
export class RxjsOperatorComponent {
  dataArray:number[] = [];
  // mySubhect = new Subject();
  // mySubhect = new ReplaySubject();
  mySubhect = new BehaviorSubject(2); //Argument data is the 1st data of this BehaviorSubject

  emitMyData(){
    this.mySubhect.next(1);
    setTimeout(()=> this.mySubhect.next(2), 1000);
    setTimeout(()=> this.mySubhect.next(3), 2000);
    setTimeout(()=> this.mySubhect.next(4), 3000);
    setTimeout(()=> this.mySubhect.next(5), 4000);
  }
  getMyData(){this.mySubhect.subscribe(
    (data:any) => this.dataArray.push(data));
    console.log('Subscribed!!');
  }
}