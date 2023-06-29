import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { LocalService } from "./local.services";
import { Observable } from "rxjs";
 
@Injectable({
    providedIn: 'root'
})
export class InfoService {
    constructor(private http: HttpClient, private localstorage: LocalService) {}


    getInfo(cityCode: number) {
        const city = this.localstorage.getData('city');
        if (city !== null) {
            const cityCode = JSON.parse(city).Code;
            return this.http.get(`https://prayer.aviny.com/api/prayertimes/${cityCode}`);
        }
        return this.http.get(`https://prayer.aviny.com/api/prayertimes/1`);
    }
}