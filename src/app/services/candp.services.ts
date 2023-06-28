import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CandPService {
    constructor(private http: HttpClient) {}


    getAllProvinces() {
        return this.http.get('https://prayer.aviny.com/api/province')
    }
    getAllCities() {
        return this.http.get('https://prayer.aviny.com/api/city')
    }
}