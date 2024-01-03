import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 
  _url = environment.baseUrl;
  constructor(private http:HttpClient) { }

getAllCategory(){
  let url=this._url+"/category"
  return this.http.get(url)
}
}
