import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttrDirectiveComponent } from './attrDirectives.component'; 
import { SrtucturalDirectiveComponent } from './structualDirectives.component'; 

@NgModule({
  declarations: [
    AttrDirectiveComponent, 
    SrtucturalDirectiveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }
