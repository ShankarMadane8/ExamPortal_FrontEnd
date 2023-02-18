import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor (private userSerivice:UserService,private snack:MatSnackBar) {}


  public user={
    userName:"",
    password:'',
    firstName:"",
    lastName:'',
    email:'',
    phone:""
  }

  fromSubmit(){
    console.log(this.user)
    if(this.user.userName=='' || this.user.userName==null){
      this.snack.open("User Name is required !!!",'',{
        duration:3000
      });
      return;
    }

    //addUser:UserService

    this.userSerivice.addUser(this.user).subscribe(
      (data:any) => {
        //success
        console.log(data);
        
        Swal.fire("successfully done !!","user id is "+data.id,"success")
      },

      (error) =>{
        //error
        console.log(error);
        this.snack.open(error.error.message,'',{
          duration:3000
        });
      }
    )



    

  }

}
