import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { OthersModule } from "../components/Others/others.module"

@Injectable({providedIn: OthersModule})
export class UserService {
    constructor(private http: HttpClient){}
    getDummyData(): Observable<any>{
        return this.http.get('/assets/dummy1.json');
    }
}