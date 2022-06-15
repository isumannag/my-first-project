import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ReactiveFromComponent } from './reactiveForm.component';
import { TempletFromComponent } from './templetForm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TempletFromComponent, 
    ReactiveFromComponent
  ],
  imports: [
    CommonModule,
    FormsModule,        // For Templet driven forms
    ReactiveFormsModule // For Reactive forms
  ]
})
export class MyFormModule { }
