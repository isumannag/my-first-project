import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';
@Component({
  selector: 'app-parent-selector',
  template: `<div class='main'>
              <h1>I'm parent component</h1>
              <app-child-selector 
                [parentValue]='messagePassing'
                (callParent)="getMsgFromBaby($event)"
                ></app-child-selector>
                <p>{{babyMessageFromOutput}}</p>
                <p>{{babyMessageFromView}}</p>
             </div>
            `,
  styles: [`div.main{border:1px solid; padding: 25px;}`]
})
export class ParentComponent implements AfterViewInit{
  messagePassing = 'Passing data from Parent using @Input!';

  babyMessageFromOutput = 'Dummy Now @Output';
  getMsgFromBaby($event: any): any{
    this.babyMessageFromOutput = $event;
  }

  babyMessageFromView = 'Dummy Now @VeiwChild';
  constructor(private cdr: ChangeDetectorRef){}
  @ViewChild(ChildComponent) child?: ChildComponent;
  ngAfterViewInit(): void {   // ngAfterViewInit is to use ViewChild
    if(this.child){
      this.babyMessageFromView = this.child.message2FromChild;
      this.cdr.detectChanges(); // Used to reflect the changes in HTML templet
    }
  }
}
