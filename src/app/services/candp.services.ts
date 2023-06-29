import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LocalService } from "./local.services";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CandPService {
    constructor(private http: HttpClient, private localstorage: LocalService) {}


    getAllProvinces() {
        const data$: Observable<any> = new Observable((s) => {
            s.next(this.localstorage.getData('provinces'))
        })

        if(this.localstorage.getData('provinces') !== null){
            return data$
        } else {
            return this.http.get('https://prayer.aviny.com/api/province')
        }
    }

    getAllCities() {
        const data$: Observable<any> = new Observable((s) => {
            s.next(this.localstorage.getData('allCities'))
        })

        if (this.localstorage.getData('allCities') !== null)
        {
            return data$
        }else {
            return this.http.get('https://prayer.aviny.com/api/city')
        }
    }
}