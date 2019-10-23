import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { User } from '../user';
import { Role } from '../role';
import { LoginAuthService } from '../login-auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user;

  
  constructor(private userService:UserService,
              private loginService:LoginAuthService,
              private router:Router,) {
                this.loginService.isLoggedIn();
               }

  ngOnInit() {
    
    this.user=new User();
    }

  signUpUser(username:string,password:string,role:string,signUpForm:any){
    var json={
      "username": username,
      "password":password,
      
      "role": [
          {
              "role": role
          }
        ]
  }
  var data=JSON.stringify(json);
  this.user= JSON.parse(data);
console.log(this.user+"   "+"json ::"+json);
    this.userService.signUpUser(this.user).subscribe((response)=>{
      if(response){
        console.log(response);
        signUpForm.reset();
        this.router.navigate(['/login']);
      }
    })
  }
}
