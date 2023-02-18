import { Component,OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit{
  quizzes=[
    { "qId":'',
      "title":" Default java Quiz",
      "description":"java is heigh level programming language and object Orientted lanaguage",
      "maxMarks":100,
      "numberOfQuestions":50,
      "active":'',
      "category":{
        "title":"sub title",
      }  
    },

  ]

  constructor(private _quiz:QuizService){}



  ngOnInit(): void{

    this._quiz.quizzes().subscribe(
      (data:any) =>{
        console.log("qizzes api through get quiz:");
        console.log(data);
        this.quizzes=data;
      },
      (error:any) =>{
        console.log("error occure at time of quiz api access");
        console.log(error);

        Swal.fire("Error !!!","Error in Loading Data","error")
      }
    )
  }


  //delete Quiz
  public deleteQuiz(qId:any){
    


    console.log("working Quiz delete function");

    Swal.fire({
      icon:'info',
      title:'Are You Sure',
      confirmButtonText:'Delete',
      showCancelButton:true
    }).then((result)=>{
        if(result.isConfirmed){
          this._quiz.deleteQuiz(qId).subscribe(
            (data:any)=>{
              this.quizzes=this.quizzes.filter((quiz:any)=>quiz.qId!=qId )
              console.log("delete Quiz");
              console.log(data);
              Swal.fire("success !!!","Quiz Delete","success");
            },
      
            (error:any) =>{
              console.log("error delete Quiz");
              console.log(error);
              Swal.fire("Error !!!","Error in Quiz Deleteing","error");
            }
      
          );
        }
    })

    
  }

}
