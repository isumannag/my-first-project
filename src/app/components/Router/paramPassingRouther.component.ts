import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-myapp',
    styleUrls: ['./all-router-examples.component.scss'],
    template: `
        <h1>Example of nested router with passing params</h1>
        <a routerLink="/paramPassingRouter" class="nr"> Home </a>
        <a [routerLink]="['/paramPassingRouter/item', 3, 'Suman']" class="nr"> Item 1 with value 3 </a>
        <a [routerLink]="['/paramPassingRouter/item', 6, 'Chayan']"
            [queryParams]="{myQueryParam: 5}"
            fragment="loading"
            class="nr"
        > Item 2 with value 6 
        </a>
        <div class="innter-outlet">
            <router-outlet></router-outlet>
        </div>
    `
})
export class ParamPassingRouterComponent{}

@Component({
    selector: 'app-param-passing',
    template: `<h3>Updated Param Details: {{idValue + ' ' + name}}<br>  Snapshot Param Details: {{initVal+ ' ' + initName}}</h3>`
})
export class ParamPassingComponent{
    idValue: any;
    name: any;
    initVal: any;
    initName: any;
    constructor(private activatedRouter: ActivatedRoute){
        this.activatedRouter.params.subscribe(
            pData => {
                this.idValue = pData['id'];
                this.name = pData['name'];
            }
        );

        this.initVal=this.activatedRouter.snapshot.params['id'];
        this.initName=this.activatedRouter.snapshot.params['name'];

        this.activatedRouter.queryParams.subscribe(
            pData => console.log('My Query Param value: ', pData)
        );
    }
}