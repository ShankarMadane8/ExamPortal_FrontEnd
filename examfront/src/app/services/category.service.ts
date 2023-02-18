import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  
  //get category
  public categories(){
    return this.http.get(`${baseUrl}/category/`)
  }

  //add Category
  public addCategories(category:any){
    return this.http.post(`${baseUrl}/category/`,category)
  }

  //get single category
  public getCategory(cid:any){
    return this.http.get(`${baseUrl}/category/${cid}`)
  }


  //update Category
  public updateCategory(category:any,cId:any){
    return this.http.put(`${baseUrl}/category/${cId}`,category);
 }


}
