import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,)
   { 
    this.http=http;
  }
  signUpUser(user:any):Observable<any>{
    const headers=new HttpHeaders({'Access-Control-Allow-Origin':'*'});

    return this.http.post("http://localhost:9090/signup",user,{headers:headers});
  }
  updateUpUser(user:any):Observable<any>{
    const headers=new HttpHeaders({'Access-Control-Allow-Origin':'*'});

    return this.http.post("http://localhost:9090/signup",user,{headers:headers});
  }

  logInUser(user:any):Observable<any>{
    const headers=new HttpHeaders({'Access-Control-Allow-Origin':'*'});

    return this.http.post("http://localhost:9090/token/generate-token",user,{headers:headers});
  }

  getAllProfiles(token:any):Observable<any>{
    const headers=new HttpHeaders({'Authorization':'Bearer '+token});

    return this.http.get("http://localhost:9090/users",{headers:headers});
  }

  getProfilesByID(token:any,id:number):Observable<any>{
    const headers=new HttpHeaders({'Authorization':'Bearer '+token});
    //alert(token);
    return this.http.get("http://localhost:9090/users/"+id,{headers:headers});
  }
}
