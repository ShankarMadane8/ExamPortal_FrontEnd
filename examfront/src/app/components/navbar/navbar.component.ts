import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn=this.login.isLoggedIn();
  user=this.login.getUser();

  constructor(public login:LoginService,private router:Router){}

  ngOnInit(): void{
    
    console.log("-------------");
    console.log(this.login.isLoggedIn());
    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();

   this.login.loginStatusSubject.asObservable().subscribe((data)=>{
    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();
   })

  }

  public logout(){
    this.login.logout();
    console.log("logout user successfully !!");
    //window.location.reload();
    this.login.loginStatusSubject.next(false);
    this.router.navigate(['login']);
  }

}
