import { Component } from "@angular/core";

@Component({
    selector: 'app-myapp',
    styleUrls: ['./all-router-examples.component.scss'],
    template: `
        <h2>Auxilary Router Example</h2>
        <a routerLink="/auxilaryRouter" class="nr">Home</a>
        <a routerLink="/auxilaryRouter/item" class="nr">Item Normal Router</a>
        <a [routerLink]="[{outlets:{'sidebar':['auxilary']}}]" class="nr">Item Auxilary Router</a>
        
        <div class="inner-outlet"><router-outlet></router-outlet></div>
        <div class="auxilary-outlet"><router-outlet name="sidebar"></router-outlet></div>
    `
})
export class AuxilaryRouterComponent{}

@Component({
    selector: 'app-aux',
    template: `<h3> This is Auxilary Component </h3>`
})
export class AuxComponent{}