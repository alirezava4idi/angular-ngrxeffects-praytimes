import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
 
@Injectable({
    providedIn: 'root'
})
export class InfoService {
    constructor(private http: HttpClient) {}


    getInfo() {
        return this.http.get('https://prayer.aviny.com/api/prayertimes/746');
    }
}