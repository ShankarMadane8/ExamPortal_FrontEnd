import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 
  constructor(private login:LoginService, private router:Router){}

  public logout(){
    this.login.logout();
    console.log("logout user successfully !!");
    //window.location.reload();
    this.login.loginStatusSubject.next(false);
    this.router.navigate(['login']);
  }


}
