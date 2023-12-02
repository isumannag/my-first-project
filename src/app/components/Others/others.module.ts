import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormattedPipeExample, PipeComponent } from './pipe.component';
import { ServiceInvokedComponent } from './serviceInvoke.component';
import { ExampleService } from 'src/app/service/my.service';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './binding.component';
import { RxjsOperatorComponent } from './rxjsOperator.component';
import { MicroFrontendComponent } from './microFrontend.component';

@NgModule({
  declarations: [
    PipeComponent, 
    FormattedPipeExample,
    ServiceInvokedComponent,
    BindingComponent,
    RxjsOperatorComponent,
    MicroFrontendComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ExampleService]
})
export class OthersModule { }
