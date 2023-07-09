import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient,) { }

  url = 'https://script.google.com/macros/s/AKfycbxDr9q7H1Y1dSqNAigwAnsnWKFu7EdvKbgX3TebON0GGye-md7v-cM5vnlENAGllQA/exec'

  headers = new HttpHeaders({'Content-Type': 'application/json','Accept': 'application/json'})

  getData(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  sendData(data: any): Observable<any> {
    console.log('In service: ',data)
    return this.http.post<any>(this.url,data, {headers: this.headers})
  }

}
