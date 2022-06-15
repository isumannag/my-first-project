import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormattedPipeExample, PipeComponent } from './pipe.component';
import { ServiceInvokedComponent } from './serviceInvoke.component';
import { ExampleService } from 'src/app/service/my.service';

@NgModule({
  declarations: [
    PipeComponent, 
    FormattedPipeExample,
    ServiceInvokedComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ExampleService]
})
export class OthersModule { }
