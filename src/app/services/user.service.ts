import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  _url=environment.baseUrl

 constructor(private http:HttpClient) { }

signUpUser(obj:any){
  console.log("userservice")
  let url = `${this._url}/user`
  return this.http.post(url,obj);
}
login(obj:any){
  console.log("userservice")
  let url = `${this._url}/login`
  return this.http.post(url,obj);
}
}
