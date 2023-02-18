import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }

  // call backend and save usser
  addUser(user:any){
   return this.http.post(`${baseUrl}/user/`,user);
    //return this.http.post("http://localhost:8181/user/",user) ;
  }


}
