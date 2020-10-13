import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
//it is a service which is used for access control
//here we use authguard as name and CanActivate interface to make it secure
export class AuthguardService {

  constructor() { }
//here we use canActivate method which is called in path in app-routing
  canActivate(route: ActivatedRouteSnapshot ){
    //we used sessionStorage to get the Item which we have stored while logging in
        let flag = false ;
        let user = sessionStorage.getItem("username");
    
        if( user )
            flag=true;
        
        return flag ;
    
    
    }
}
