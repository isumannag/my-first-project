import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NestedComponentModule } from './components/Components/component.module';
import { DirectiveModule } from './components/Directives/directive.module';
import { OthersModule } from './components/Others/others.module';
import { MyFormModule } from './components/Forms/from.module';
import { RouterExampleModule } from './components/Router/routerExample.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './guards/auth.service';
import { AuthGuard } from './guards/auth-guard.service';
import { CanDeactivateGuard } from './guards/can-deactivate-guard.service';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    NestedComponentModule,
    DirectiveModule,
    MyFormModule,
    RouterExampleModule,
    OthersModule
  ],
  bootstrap: [AppComponent],
  providers: [AuthService, AuthGuard, CanDeactivateGuard]
})
export class AppModule { }
