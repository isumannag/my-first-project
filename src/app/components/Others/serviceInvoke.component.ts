import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { CanComponentDeactivate } from "src/app/guards/can-deactivate-guard.service";
import { ExampleService } from "src/app/service/my.service";

@Component({
    selector: 'app-myapp',
    template: `
        <p>Data came from service: {{updatedData$|async}}</p>
        
        <p *ngIf="updatedData$ | async as myData; else loading">*ngIf with alias name example: {{myData}}</p>
        <ng-template #loading>Loading user info...</ng-template>
    `
})
export class ServiceInvokedComponent implements OnInit, CanComponentDeactivate{    
    updatedData$:any;
    constructor(private myService: ExampleService, private route: Router, private actvRoute: ActivatedRoute){}

    public wantToLeaveThePage: boolean = false;

    /* Alternative approach to DI using "inject" */
    // private myService: ExampleService;
    // constructor() {this.myService = inject(ExampleService);}

    ngOnInit() {
        this.updatedData$ = this.myService.getDummyData();
    }

    onChangeBtn(){
        this.wantToLeaveThePage = true;
        this.route.navigate(["../"], {relativeTo: this.actvRoute});
    }

    canDeactivate():boolean | Observable<boolean> | Promise<boolean> {
        if(!this.wantToLeaveThePage){
            return confirm('Do You Want to Leave the Page?');
        } else {
            return true;
        }
    };
}