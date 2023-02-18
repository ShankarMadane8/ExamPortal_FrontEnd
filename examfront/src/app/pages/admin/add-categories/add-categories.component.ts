import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent {

  category={
    "title":'',
    "description":''
  }

  constructor(private categories:CategoryService,private snack:MatSnackBar){}

  public fromSubmit(){

    //Title required 
    if(this.category.title.trim()=='' || this.category.title.trim()==null){
      console.log("title Required");
      this.snack.open("Title is required !!!",'',{
        duration:3000
      });
      return;
    }

    //Add category
    this.categories.addCategories(this.category).subscribe(
      (data:any) =>{
        console.log("category data: "+data);
        this.category.title='';
        this.category.description='';
        Swal.fire("Success !!","Category is added Successfully","success")
      },

      (error) =>{
        //error
        console.log("server Error Not Category Save: "+error);
        Swal.fire("Error !!","Server Error !!","error")
      }
    )


  }


}
