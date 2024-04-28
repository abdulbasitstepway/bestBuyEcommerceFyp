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

  getProductsByPgSize(currentPg: any,pgSize: any){
    let url = `${this._url}/products/${currentPg}/${pgSize}`
    return this.http.get(url);
  }
  getProductBycategory(categoryId: any) {
    let url=`${this._url}/product/byCategoryId?id=${categoryId}`
    return this.http.get<any>(url)
  }

   getOrderDetailByCartId(cartId: any) {
    let url=`${this._url}/orderDetailsByCartId?cartId=${cartId}`
    return this.http.get<any>(url)
  }
  

  getSearchProducts(search:any): Observable<any>{
    let url=`${this._url}/product/search/${search}`
    return this.http.get<any>(url)
  }

  getAllCartProduct(cartId:any){
    let url=`${this._url}/cartProduct/${cartId}`
    return this.http.get<any>(url)
  }

  AddToCart(obj:any){
    debugger
    let url=`${this._url}/cart`
    return this.http.post(url,obj)
  }

  updateCartProduct(obj:any){
    let url=`${this._url}/update/cartProduct`
    return this.http.post(url,obj)
  }

  AddToOrderDetail(obj:any){
    let url=`${this._url}/orderDetails`
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
