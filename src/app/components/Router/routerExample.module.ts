import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuxilaryRouterComponent } from './auxilaryRouther.component';
import { NestedRouterComponent } from './nestedRouther.component';
import { ParamPassingComponent, ParamPassingRouterComponent } from './paramPassingRouther.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuxilaryRouterComponent, 
    NestedRouterComponent,
    ParamPassingRouterComponent,
    ParamPassingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RouterExampleModule { }
