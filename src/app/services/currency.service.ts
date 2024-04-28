import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  
  _url=environment.baseUrl
  constructor(private http:HttpClient) { }

  getConversionCurrency(id:number){
    debugger
    let url = `${this._url}/get/conversionCurrency?id=${id}`
    return this.http.get(url);
  }

  getCurrency():Observable<any> {
    let url = `${this._url}/currency/get`
    return this.http.get(url);
  }
}
