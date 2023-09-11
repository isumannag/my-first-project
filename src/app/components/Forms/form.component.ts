import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-myapp',
    template: `
        <h1> All Form Examples </h1>

        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" 
                    routerLink="/form" 
                    routerLinkActive="active"
                    [routerLinkActiveOptions]="{exact: true}"
                >   Templet Form Example
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" 
                    routerLink="templetformgroup" 
                    routerLinkActive="active"
                >   Templet FormGroup Example
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" 
                    routerLink="reactiveform" 
                    routerLinkActive="active"
                >   Reactive Form Example
                </a>
            </li>
        </ul>
        <div class="inner-outlet"> 
            <router-outlet></router-outlet>
        </div>
    `
})
export class MyAllFormComponent{    
    constructor(private routerVar: Router){}
}