import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { Profile } from '../profile';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public logInUser:User;
 public user:User[];

  constructor(private loginService:LoginAuthService,
              private userService:UserService
            ) {
    this.loginService.isLoggedIn();
    this.logInUser=JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    
    this.userService.getAllProfiles(this.logInUser.token).subscribe(data=>{

      
      this.user=data;
    
      console.log(this.user);
    })
  }

}
