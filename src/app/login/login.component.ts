import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { Role } from '../role';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  userarr:User[];
  userauthority:any[];
  data :object[];
  userId:string;
  constructor(
    private userService:UserService,
    private router:Router,
    private loginService:LoginAuthService
  
    ) { this.loginService.isLoggedIn();}

  ngOnInit() {
    this.user=new User();
  
  }

  loginUser(user:User,loginForm:any){
    this.userService.logInUser(this.user).subscribe((response)=>{
      if(response){
        //this.userauthority=response.user.authorities;
        console.log(response.user.role[0].role);
       //console.log(this.userauthority[0].authority)
          if(response.token){
            localStorage.setItem('currentUser',JSON.stringify(response));
            
            

            if( response.user.role[0].role ==='ADMIN'){
             this.router.navigate(['/adminDashboard']);
            }
            else{
              console.log("IDDDD: "+response.userId);
             this.router.navigate(['/userProfile',response.user.userId]);
           }
          }
        loginForm.reset();
       
             }
          }
    )}
}