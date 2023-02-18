import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(public http:HttpClient) { }

  // get Question by Quiz
  public getQuestionOfQuiz(qId:any){
    return this.http.get(`${baseUrl}/question/quiz/${qId}`)
  }


}
