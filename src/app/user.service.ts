import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './User';
//we need to make necessary imports inorder to access some files
@Injectable({
  providedIn: 'root'
})
export class UserService {
  //we use HttpClientModule inorder to establish a connection between angular and sts
  //we use HttpClient object to make the desired request 
  constructor(private userClient:HttpClient) { }
  //these is the URL paths that we are going to use inorder to make a request
  private baseUrl="http://localhost:9090";
  httpService: any;


  //Error handling using HttpErrorResponse
  private handleError(errorResponse : HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.error('Client side error: ', errorResponse.error.message);
    }else{
      console.error('Server side error: ',errorResponse);
    } 
    return throwError('There is a problem with the service. Please try again later');
  }

    //the below methods are implemented for desired operations to perform with the controller
  
    validateAdmin(userName:string, userPassword:string):Observable<Boolean>{
      return this.userClient.get<Boolean>(this.baseUrl+"/user/login/admin/"+userName+"/"+userPassword)
      .pipe(catchError(this.handleError));
    }
    
   //Observable is used because the data is accessed for a particular amount of time throught the apllication
  //and the controller methods will return data as response entity
  validateUser(userName:string, userPassword:string):Observable<Boolean>{
    return this.userClient.get<Boolean>(this.baseUrl+"/user/login/"+userName+"/"+userPassword)
    .pipe(catchError(this.handleError));  
  }

  register(user:User):Observable<User>{
    return this.userClient.post<User>(this.baseUrl+"/user/add",user)
    .pipe(catchError(this.handleError));
  }

  getUsers():Observable<User[]>{
    return this.userClient.get<User[]>(this.baseUrl+"/user/all")
    .pipe(catchError(this.handleError));
  }

  getUserByName(userName:string){
    return this.userClient.get<User>(this.baseUrl+"/user/"+userName)
    .pipe(catchError(this.handleError));
  }
}
