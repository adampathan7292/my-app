import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LoginAuthService } from '../login-auth.service';
import { User } from '../user';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Profile } from '../profile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;
  user1:User;
  userId:any;
  id:number;
  profile:Profile;
  
  public jsonObject:any;
  constructor(private userService:UserService,
    private route: ActivatedRoute,
    private router:Router,
    private loginService:LoginAuthService) {
      this.loginService.isLoggedIn();
      
      
     }

  ngOnInit() {
    this.user=new User();
    this.user1=new User();
    this.user1=JSON.parse(localStorage.getItem('currentUser'));
      console.log("Token  :"+this.user1.token);
    this.userId = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log("IDDDDDDDD:"+this.id);
      this.userService.getProfilesByID(this.user1.token,this.id).subscribe(response=>{
       console.log(response);

       this.user=response;
       console.log("User:::"+this.user);
       })
    })}
    back(){
      this.router.navigate(['/login']);
    }

  save(data:any){

    this.jsonObject=
      {
        "userId": this.user.userId,
        "username": this.user.username,
        "password":this.user.password,
        "active": this.user.active,
       
        "role": [
            {
                "roleid": this.user.role[0].roleid,
                "role":this.user.role[0].role            }
        ],
        "profile": {
            "id": this.user.userId,
            "firstname":data.firstname,
            "lastname": data.lastname,
            "email": data.email,
            "gender":data.gender,
            "mobile": data.mobile,
            "dob": data.dob,
            "address": data.address,
            "city": data.city,
            "state": data.state,
            "zipcode": data.zipcode,
            "country": data.country,
            "quilication": data.quilication,
            "company": data.company,
            "companyAddr": data.companyAddr
        }
    }
    
   console.log("Data For Save Method JSON OBJECT:  "+JSON.stringify(this.jsonObject));
  this.userService.signUpUser(this.jsonObject).subscribe(response=>{
    console.log(response);
    alert("Profile Created Successfully !!!");
    
  })
    
  }
}
