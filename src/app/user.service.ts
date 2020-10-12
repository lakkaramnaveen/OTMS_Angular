import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userClient:HttpClient) { }

  private baseUrl="http://localhost:9090";
  httpService: any;

  validateAdmin(userName:string, userPassword:string):Observable<Boolean>{
    return this.userClient.get<Boolean>(this.baseUrl+"/user/login/admin/"+userName+"/"+userPassword)
    .pipe(catchError(this.handleError));
  }
  
  //Error handling using HttpErrorResponse
  private handleError(errorResponse : HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.error('Client side error: ', errorResponse.error.message);
    }else{
      console.error('Server side error: ',errorResponse);
    } 
    return throwError('There is a problem with the service. Please try again later');
  }
  
  validateUser(userName:string, userPassword:string):Observable<Boolean>{
    return this.userClient.get<Boolean>(this.baseUrl+"/user/login/"+userName+"/"+userPassword)
    .pipe(catchError(this.handleError));  
  }

  register(user:User):Observable<User>{
    return this.userClient.post<User>(this.baseUrl+"/user/add",user)
    .pipe(catchError(this.handleError));
  }

  getUsers(){
    return this.userClient.get<User>(this.baseUrl+"/user/all")
    .pipe(catchError(this.handleError));
  }

  getUserByName(userName:string){
    return this.userClient.get<User>(this.baseUrl+"/user/"+userName)
    .pipe(catchError(this.handleError));
  }
}
