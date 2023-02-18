import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  constructor (public category:CategoryService,private route: ActivatedRoute,public router:Router){}

  Category: any;


  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('cId'));
    this.category.getCategory(this.route.snapshot.paramMap.get('cId')).subscribe(
      (data:any) =>{
        console.log("fetch one Category")
        console.log(data);
        this.Category=data;
      },
      (error:any)=>{
        console.log(error);
        Swal.fire("Error !!!","Error in category Loading","error")
      }
    );
  }




   // update category
   public fromSubmit(){
    this.category.updateCategory(this.Category, this.route.snapshot.paramMap.get('cId')).subscribe(
     (data:any) =>{
       console.log("update Category");
       Swal.fire("Success !!!","Category Update","success").then((e)=>{
         this.router.navigate(['/admin/categories']);
       });
     },
     (error:any) =>{
       console.log("error occure in category update");
       console.log(error);
 
       Swal.fire("Error !!!","Error in category Update","error");
     }
    )
 
   }

}
