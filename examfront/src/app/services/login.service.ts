import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject=new Subject<boolean>();

  constructor(private http:HttpClient) { }

  

  //---------------login or generate token-------------------
  public generateToken(loginData:any){
   
    return this.http.post(`${baseUrl}/generate-token`,loginData);
  }


  //------------current user: Which is logged-----------------
  public getCurrentUser(){
   let user=this.http.get(`${baseUrl}/current-user`);
   
    return user;
  }


  //------if  User is login then set token in localStorage-----
  loginUser(token:any){
 
    localStorage.setItem("token",token);
    return true;
  }


  //--------------------is logged in-------------------------- 
  public isLoggedIn(){
  
   let tokenstr=localStorage.getItem("token");
   if(tokenstr==undefined || tokenstr=='' || tokenstr==null){
    return false;
   }else{
    return true;
   }
  }

  //---------------------logout------------------------------
  public logout(){
    
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  //--------------------getToken----------------------------
  public getToken(){
    
    return localStorage.getItem("token");
  }

  //-------------------setUserdetail-----------------------
  public setUserDetail(user:any){
   
    localStorage.setItem("user",JSON.stringify(user));
  }

  //------------------getUser----------------------------
  public getUser(){
 
    let user=localStorage.getItem("user");
    if(user!=null){
       return JSON.parse(user);
    }else{
      this.logout();
      return null;
    }
  }

  //------------------getUserRole-----------------------
  public getUserRole(){
    
    if(this.isLoggedIn()){
      let user=this.getUser();
      return user.authorities[0].authority;
    }
    return null;
   
  }





}
