import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-selector',
  template: `<p>{{parentValue}}</p>`,
  styles: [`div.main{border:1px solid; padding: 25px;}`]
})
export class ChildComponent implements OnInit{
  @Input() parentValue: any;
  @Output() callParent = new EventEmitter();
  messageFromChild = 'Getting data from Child using @Output!';
  message2FromChild = 'Getting data from Child using @ViewChild!';
  ngOnInit(): any {
    this.callParent.emit(this.messageFromChild);
  }
}
