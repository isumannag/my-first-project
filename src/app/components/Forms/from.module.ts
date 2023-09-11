import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ReactiveFromComponent } from './reactiveForm.component';
import { TempletFromComponent } from './templetForm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TempletFromGroupComponent } from './templetFormGroup.component';
import { RouterModule } from '@angular/router';
import { MyAllFormComponent } from './form.component';

@NgModule({
  declarations: [
    TempletFromComponent, 
    ReactiveFromComponent,
    TempletFromGroupComponent,
    MyAllFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,        // For Templet driven forms
    ReactiveFormsModule // For Reactive forms
  ]
})
export class MyFormModule { }
