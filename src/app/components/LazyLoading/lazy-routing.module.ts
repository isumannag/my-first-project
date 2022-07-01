import { NgModule } from '@angular/core';
import { LazyLoadingComponent } from './lazyLoading.component'; 
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LazyLoadingComponent}
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class LazyRoutingModule{}