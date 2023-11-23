import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-selector',
  template: `<p>{{parentValue}} in the Child<br>
            <ng-content></ng-content></p>`,
  styles: [`p{border:1px solid; padding: 25px; color: blue}`],
  // encapsulation: ViewEncapsulation.Emulated //Default
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ChildComponent implements OnInit{
  @Input('parentValueAlias') parentValue: any;
  @Output() callParent = new EventEmitter();
  messageFromChild = 'Getting data from Child using @Output!';
  message2FromChild = 'Getting data from Child using @ViewChild!';
  ngOnInit(): any {
    this.callParent.emit(this.messageFromChild);
  }
}
