import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // _url = environment.baseUrl
  _url=environment.baseUrl

  constructor(private http: HttpClient) { }

  getProduct(){
    let url = `${this._url}/product`
    return this.http.get(url);
  }

  getSearchProducts(search:any): Observable<any>{
    debugger
    let url=`${this._url}/product/search/${search}`
    return this.http.get<any>(url)
  }
}
