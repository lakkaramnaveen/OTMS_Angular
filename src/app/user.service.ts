import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userClient:HttpClient) { }

  private baseUrl="http://localhost:9090";
  httpService: any;

  validateAdmin(userName:string, userPassword:string):Observable<User>{
    return this.userClient.get<User>(this.baseUrl+"/user/login/admin/"+userName+"/"+userPassword);  
  }
  validateUser(userName:string, userPassword:string):Observable<User>{
    return this.userClient.get<User>(this.baseUrl+"/user/login/"+userName+"/"+userPassword);  
  }
  register(user:User):Observable<User>{
    return this.userClient.post<User>(this.baseUrl+"/user/add",user);
  }
  getUsers(){
    return this.userClient.get<User>(this.baseUrl+"/user/all");
  }
  getUserByName(userName:string){
    return this.userClient.get<User>(this.baseUrl+"/user/"+userName);
  }
}
