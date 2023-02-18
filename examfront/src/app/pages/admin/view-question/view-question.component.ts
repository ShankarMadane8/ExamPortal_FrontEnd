import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})

export class ViewQuestionComponent implements OnInit{
constructor(public question:QuestionService,private route: ActivatedRoute){}
 
 Qusetions:any;
  
  ngOnInit(): void {
    this.question.getQuestionOfQuiz(this.route.snapshot.paramMap.get('qId')).subscribe(
      (data:any)=>{
        console.log("fetch all Questions by Quiz");
        console.log(data);
      },
      (error:any)=>{
        console.log("error occure in Questions by Quiz fetch");
        console.log(error);
      }
    )
  }


}