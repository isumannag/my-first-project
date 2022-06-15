import { Component } from "@angular/core";

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
        <a routerLink="/nestedRouter" class="nr">Home</a>
        <a routerLink="/nestedRouter/item" class="nr">Item</a>
        <div class="inner-outlet"> 
            <router-outlet></router-outlet>
        </div>
    `
})
export class NestedRouterComponent{}