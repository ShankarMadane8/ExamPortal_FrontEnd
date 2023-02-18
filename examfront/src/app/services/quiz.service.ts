import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  //get qizzes
  public quizzes(){
    return this._http.get(`${baseUrl}/quiz/`)
  }

  //add qizzes
  public addQuizzes(quiz:any){
    return this._http.post(`${baseUrl}/quiz/`,quiz)
  }

  //get quiz by id
  public getQuiz(quizid:any){
    return this._http.get(`${baseUrl}/quiz/${quizid}`)
  }

  //delete Quiz
  public deleteQuiz(qId:any){
     return this._http.delete(`${baseUrl}/quiz/${qId}`)
  }

  //update Quiz
  public updateQuiz(quiz:any,qId:any){
    return this._http.put(`${baseUrl}/quiz/${qId}`,quiz);
 }


}
