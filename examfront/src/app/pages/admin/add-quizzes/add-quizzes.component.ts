import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quizzes',
  templateUrl: './add-quizzes.component.html',
  styleUrls: ['./add-quizzes.component.css']
})
export class AddQuizzesComponent implements OnInit {

  quizzes={
    "title":'',
    "description":'',
    "maxMarks":0,
    "numberOfQuestions":0,
    "category":{
      "cId":0,
    },
    "active":false,
  }

  categories=[
    {
    "cId":2,
    "title":"java"
   },

   {
    "cId":3,
    "title":"python"
   },
]



  

  constructor(private _quiz:QuizService,private snack:MatSnackBar,private category:CategoryService){}


  ngOnInit(): void{

    this.category.categories().subscribe(
      (data:any) =>{
        console.log("categories api through get category:");
        console.log(data);
        this.categories=data;
      },
      (error:any) =>{
        console.log("error occure at time of category api access");
        console.log(error);

        Swal.fire("Error !!!","Error in Loading Data","error")
      }
    )
  }


  public fromSubmit(){
     
    //Title required 
    if(this.quizzes.title.trim()=='' || this.quizzes.title.trim()==null){
      console.log("title Required");
      this.snack.open("Title is required !!!",'',{
        duration:3000
      });
      return;
    }

    

    //Add category
    this._quiz.addQuizzes(this.quizzes).subscribe(
      
      (data:any) =>{
        console.log("Quiz data: "+data);
        this.quizzes.title='';
        this.quizzes.description='';
        Swal.fire("Success !!","Quiz is added Successfully","success")
      },

      (error) =>{
        //error
        console.log("server Error Not quiz Save: "+error);
        Swal.fire("Error !!","Server Error !!","error")
      }
    )


   }




   

}
