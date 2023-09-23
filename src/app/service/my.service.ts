import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable, delay, map } from "rxjs";

interface RR {'data': string};

@Injectable()
export class ExampleService {
    constructor(private http: HttpClient){}
    getDummyData(): Observable<any>{
        return this.http.get('/assets/dummy.json').pipe(delay(1500),map(val => {
            return (<RR>val).data;
        }));
    }
}