import { Component,OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories=[

    {
      "title":" default java programing",
      "description":"demo pf java categories",
      "cId":'',
    },

  ]
    
  

  constructor (public category:CategoryService){}


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



}
