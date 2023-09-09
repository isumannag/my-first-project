import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ParentComponent } from './components/Components/parent.component';
import { SrtucturalDirectiveComponent } from './components/Directives/structualDirectives.component';
import { AttrDirectiveComponent } from './components/Directives/attrDirectives.component';
import { PipeComponent } from './components/Others/pipe.component';
import { ServiceInvokedComponent } from './components/Others/serviceInvoke.component';
import { ReactiveFromComponent } from './components/Forms/reactiveForm.component';
import { TempletFromComponent } from './components/Forms/templetForm.component';
import { ChildHome, ChildOther, NestedRouterComponent } from './components/Router/nestedRouther.component';
import { ParamPassingComponent, ParamPassingRouterComponent } from './components/Router/paramPassingRouther.component';
import { AuxComponent, AuxilaryRouterComponent } from './components/Router/auxilaryRouther.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BindingComponent } from './components/Others/binding.component';
import { AuthGuard } from './guards/auth-guard.service';
import { CanDeactivateGuard } from './guards/can-deactivate-guard.service';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'nestedComponent', component: ParentComponent},
  {path: 'structDirective', component: SrtucturalDirectiveComponent},
  {path: 'attrDirective', component: AttrDirectiveComponent},
  {path:'pipe', component: PipeComponent},
  {path:'binding', component: BindingComponent},  
  {path:'service', component: ServiceInvokedComponent, canDeactivate: [CanDeactivateGuard]},
  {path:'templetForm', component: TempletFromComponent},
  {path:'reactiveForm', component: ReactiveFromComponent},
  {path:'nestedRouter', component: NestedRouterComponent,
   children: [
    {path:'', component: ChildHome},
    {path:'item', component: ChildOther}
   ]
  },
  {path:'paramPassingRouter', component: ParamPassingRouterComponent,
   children: [
    {path:'', component: ChildHome},
    {path:'item/:id/:name', component: ParamPassingComponent}
   ]
  },
  {path:'auxilaryRouter', 
   component: AuxilaryRouterComponent, 
   // canActivate: [AuthGuard],
   canActivateChild: [AuthGuard],
   children: [
    {path:'', component: ChildHome},
    {path:'item', component: ChildOther},
    {path:'auxilary', component: AuxComponent, outlet: 'sidebar'}
   ]
  },
  {path: 'lazy-loading-path',
   loadChildren: () => import('./components/LazyLoading/lazyLoading.module').then(m => m.LazyLoadingModule)
  },
  {path: '**', component: PageNotFoundComponent, data: {message: 'Page not found'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
