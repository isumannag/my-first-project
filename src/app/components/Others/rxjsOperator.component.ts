import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { BehaviorSubject, filter, interval, take,
        mergeMap, concatMap, switchMap, exhaustMap, forkJoin, tap, delay } from 'rxjs';

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
  <div>Response Data: {{responseData?.id}}</div>

    
  `
})
export class RxjsOperatorComponent implements OnInit{
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

  // Operator examples
  constructor(private http: HttpClient){}
  responseData: any;
  ngOnInit(): void {
    let myParams = interval(1000).pipe(take(5),filter(v=> v>0));

    myParams.pipe(
      mergeMap((id)=>{
    // concatMap ((id)=>{
    // switchMap((id)=>{
    // exhaustMap((id)=>{

      return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id)
    }))
    .subscribe((response)=>{
      console.log(response);
      this.responseData = response;
    });

    // ForkJon Example
    forkJoin([
      this.http.get('https://jsonplaceholder.typicode.com/posts/1'),
      this.http.get('https://jsonplaceholder.typicode.com/posts/2'),
      this.http.get('https://jsonplaceholder.typicode.com/posts/3').pipe(
        delay(7000),tap(data=>console.log(data))),
      this.http.get('https://jsonplaceholder.typicode.com/posts/4'),
      this.http.get('https://jsonplaceholder.typicode.com/posts/5'),
      this.http.get('https://jsonplaceholder.typicode.com/posts/6')
    ]).subscribe(allResult=>console.log('All Result from forkjoin: ', allResult));
  }
}