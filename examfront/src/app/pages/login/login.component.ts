import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //constructor
  constructor (private snack:MatSnackBar,private login:LoginService,private router:Router){
    // first logout then go to login page
    if(this.login.isLoggedIn()){
      if(this.login.getUserRole()=="ADMIN"){
        console.log("you are admin please logout first then goto login page")
        this.router.navigate(['admin']);
      }
      if(this.login.getUserRole()=="NORMAL"){
        console.log("you are Normal logout first then goto login page")
        this.router.navigate(['user-dashboard']);
      }
    }

  }

  loginData={
     userName:'',
     password:''
  }

  public formSubmit(){
    console.log("login btn click")

    //check userName field is null or not
    if(this.loginData.userName.trim()=="" || this.loginData.userName==null){
      console.log("username required")
      this.snack.open("userName is Required !!",'',{
        duration:3000,
      });
      return;
    }


    //check password field is null or not
    if(this.loginData.password.trim()=="" || this.loginData.password==null){
      console.log("password required")
      this.snack.open("password is Required !!",'',{
        duration:3000,
      });
      return;
    }

    //request to server and generate token or login user
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("success login");
        console.log(data);


        // userlogin
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any) => {
            this.login.setUserDetail(user);
            console.log("get current user details");
            console.log(user);
            //REDIRECT... ADMIN: Admin-dashboard
            //REDIRECT... NORMAL: Normal-dashboard
            if(this.login.getUserRole()=="ADMIN"){
               //admin dashboard
               //window.location.href="/admin";
               this.router.navigate(['admin']);
               this.login.loginStatusSubject.next(true);
            }
            else if(this.login.getUserRole()=="NORMAL"){
              //normal user dashboard
              //window.location.href="/user-dashboard";
              this.router.navigate(['user-dashboard']);
              this.login.loginStatusSubject.next(true);
            }
            else{
              console.log("logout, not found user Type")
              this.login.logout();
            }

            
          },
          (error:any) => {
            console.log("error in getting current user")
            console.log(error);
          }
        )

      },
      (error:any)=>{
        console.log("error in login")
        console.log(this.login)
        this.snack.open("Invalid Details !! Try again",'',{
          duration:3000,
        })
      }
      
    );





  }




}
