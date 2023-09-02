import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttrDirectiveComponent, 
        myDirective, 
        myBetterDirective, 
        myDirectiveListener, 
        myDirectiveHostBuinging,
        myParamPassingDirective } from './attrDirectives.component'; 
import { SrtucturalDirectiveComponent, 
        MyConditionDirective } from './structualDirectives.component'; 

@NgModule({
  declarations: [
    AttrDirectiveComponent, 
    SrtucturalDirectiveComponent,
    myDirective,
    myBetterDirective,
    myDirectiveListener,
    myDirectiveHostBuinging,
    myParamPassingDirective,
    MyConditionDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }
