import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})

export class UpdateQuizComponent implements OnInit{

  constructor(private route: ActivatedRoute, private quiz:QuizService,public category:CategoryService, public router:Router) { }
  Quiz: any;
  categories: any;

ngOnInit() {
   console.log(this.route.snapshot.paramMap.get('any'));
   

   console.log(this.quiz.getQuiz(this.route.snapshot.paramMap.get('any')).subscribe(
    (data:any) =>{
      console.log("Quiz api through get Quiz:");
      console.log(data);
      this.Quiz=data;
    },
    (error:any) =>{
      console.log("error occure at time Quiz api access");
      console.log(error);

      Swal.fire("Error !!!","Error in quiz Loading","error")
    }
   ));


   this.category.categories().subscribe(
    (data:any) =>{
      console.log(" categories api through get categories:");
      console.log(data);
      this.categories=data;
    },
    (error:any) =>{
      console.log("error occure at time categories api access");
      console.log(error);

      Swal.fire("Error !!!","Error in categories Loading","error")
    }
   );
 
};


  // update Quiz
  public fromSubmit(){
   this.quiz.updateQuiz(this.Quiz,this.route.snapshot.paramMap.get('any')).subscribe(
    (data:any) =>{
      console.log("update Quiz");
      Swal.fire("Success !!!","Quiz Update","success").then((e)=>{
        this.router.navigate(['/admin/quizzes']);
      });
    },
    (error:any) =>{
      console.log("error occure in quiz update");
      console.log(error);

      Swal.fire("Error !!!","Error in Quiz Update","error");
    }
   )

  }


}
