import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable()
export class ExampleService {
    constructor(private http: HttpClient){}
    getDummyData(): Observable<any>{
        return this.http.get('/assets/dummy.json');
    }
}