import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { Observable } from "rxjs"
import { ExampleService } from "../service/my.service";

interface serve {data: string}
@Injectable()
export class ServerResolver implements Resolve<serve>{
    constructor(private myService: ExampleService){}

    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): serve | Observable<serve> | Promise<serve> 
    {
        return this.myService.getDummyData();
    }
}