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
  getProductBycategory(categoryId: any) {
    let url=`${this._url}/product/byCategoryId?id=${categoryId}`
    return this.http.get<any>(url)
  }

  getSearchProducts(search:any): Observable<any>{
    debugger
    let url=`${this._url}/product/search/${search}`
    return this.http.get<any>(url)
  }

  getAllCartProduct(cartId:any){
    debugger
    let url=`${this._url}/cartProduct/${cartId}`
    return this.http.get<any>(url)
  }

  AddToCart(obj:any){
    let url=`${this._url}/cart`
    return this.http.post(url,obj)
  }


AddToCartProduct(obj:any){
  let url=`${this._url}/cartProduct`
    return this.http.post(url,obj)
}

  postProduct(obj :any){
    let url = `${this._url}/product`
    return this.http.post(url,obj)
  }
}
