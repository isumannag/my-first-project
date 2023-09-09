import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { Observable } from "rxjs"

interface serve {id: number, status: string}

export class ServerResolver implements Resolve<serve>{
    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): serve | Observable<serve> | Promise<serve> 
    {
        
    }
}