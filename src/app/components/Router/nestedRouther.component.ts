import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-child-1',
    template: `Child Home`
}) export class ChildHome {}

@Component({
    selector: 'app-child-2',
    template: `Child Other Page`
}) export class ChildOther {}

@Component({
    selector: 'app-myapp',
    styleUrls: ['./all-router-examples.component.scss'],
    template: `
        <h1> This is a Nested Router Example</h1>
        <a (click)="goHome()" class="gohome">Go To Parent Home</a>

        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" 
                    routerLink="/nestedRouter" 
                    routerLinkActive="active"
                    [routerLinkActiveOptions]="{exact: true}"
                >   Home
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" 
                    [routerLink]="['/nestedRouter', 'item']" 
                    routerLinkActive="active"
                >   Item
                </a>
            </li>
        </ul>
        <div class="inner-outlet"> 
            <router-outlet></router-outlet>
        </div>
    `
})
export class NestedRouterComponent{
    constructor(private routerVar: Router){}
    goHome(){
        this.routerVar.navigate(
            ['/home'],
            {   queryParams: {from: 'nestedComp'}, 
                fragment: 'loading'
            }
        );
    }
}