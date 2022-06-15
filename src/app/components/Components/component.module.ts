import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [
    ParentComponent, 
    ChildComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NestedComponentModule { }
