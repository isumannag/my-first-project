import { Component } from "@angular/core";
import { ExampleService } from "src/app/service/my.service";

@Component({
    selector: 'app-myapp',
    template: `Data came from service: {{updatedData}}`
})
export class ServiceInvokedComponent{
    public updatedData = {};
    constructor(private myService: ExampleService){
        this.myService.getDummyData().subscribe(
            successData => this.updatedData = successData.data,
            errorData => console.log('Service Error!: ', errorData)
        );
    }
}