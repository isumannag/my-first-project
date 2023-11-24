import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-selector',
  template: `<p>{{parentValue}} in the Child<br>
           <ng-content></ng-content><br>
           Child Function Executing : {{incrementCounter()}} times<br></p>`,
  styles: [`p{border:1px solid; padding: 25px; color: blue}`],
  // encapsulation: ViewEncapsulation.Emulated //Default
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit{
  count = 0;
  @Input('parentValueAlias') parentValue: any;
  @Output() callParent = new EventEmitter();
  messageFromChild = 'Getting data from Child using @Output!';
  message2FromChild = 'Getting data from Child using @ViewChild!';
  ngOnInit(): any {
    this.callParent.emit(this.messageFromChild);
  }
  incrementCounter(){
    console.log('Child Counter Function Executing..');
    return this.count++
  }
}
