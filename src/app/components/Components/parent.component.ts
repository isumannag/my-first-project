import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChildComponent } from './child.component';
@Component({
  selector: 'app-parent-selector',
  template: `<div class='main'>
              <h1>I'm parent component</h1>
              
              <app-child-selector 
                [parentValueAlias]='messagePassing'
                (callParent)="getMsgFromBaby($event)"
              > 
                <div style="color:red">ng-contenct example</div>
              </app-child-selector>

              <p>{{babyMessageFromOutput}}</p>
              <p>{{babyMessageFromView}}</p><br><br>

              <p>{{myResolverData}} : Data passing through resolver of Router</p>
             </div>
            `,
  styles: [`div.main{border:1px solid; padding: 25px}`]
})
export class ParentComponent implements AfterViewInit, OnInit{
  messagePassing = 'Passing data from Parent using @Input!';

  babyMessageFromOutput = 'Dummy Now @Output';
  getMsgFromBaby($event: any): any{
    this.babyMessageFromOutput = $event;
  }

  babyMessageFromView = 'Dummy Now @VeiwChild';
  constructor(private cdr: ChangeDetectorRef, private actvRoute: ActivatedRoute){}
  @ViewChild(ChildComponent) child?: ChildComponent;
  ngAfterViewInit(): void {   // ngAfterViewInit is to use ViewChild
    if(this.child){
      this.babyMessageFromView = this.child.message2FromChild;
      this.cdr.detectChanges(); // Used to reflect the changes in HTML templet
    }
  }

  // Resolver example through Router
  myResolverData: string = '';
  ngOnInit(): void {
    this.actvRoute.data.subscribe(
      data => {
        this.myResolverData = data['server'];
      }
    );
  }
}
