import { Component, inject, OnInit } from "@angular/core";
import { ExampleService } from "src/app/service/my.service";

@Component({
    selector: 'app-myapp',
    template: `Data came from service: {{updatedData}}`
})
export class ServiceInvokedComponent implements OnInit{
    public updatedData = {};
    constructor(private myService: ExampleService){}

    /* Alternative approach to DI using "inject" */
    // private myService: ExampleService;
    // constructor() {this.myService = inject(ExampleService);}

    ngOnInit() {
        this.myService.getDummyData().subscribe(
            successData => this.updatedData = successData.data,
            errorData => console.log('Service Error!: ', errorData)
        );
    }
}