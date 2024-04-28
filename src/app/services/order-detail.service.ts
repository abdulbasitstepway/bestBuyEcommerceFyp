import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {


  _url=environment.baseUrl
  constructor(private http:HttpClient) { }

  deleteOrderDetail(id:number){
    debugger
    let url = `${this._url}/orderDetails/delete/${id}`
    return this.http.delete(url);
  }
}
