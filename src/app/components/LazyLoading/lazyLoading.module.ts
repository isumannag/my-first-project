import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingComponent } from './lazyLoading.component'; 
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
    declarations: [LazyLoadingComponent],
    imports: [
      CommonModule,
      LazyRoutingModule
    ]
  })
  export class LazyLoadingModule{}