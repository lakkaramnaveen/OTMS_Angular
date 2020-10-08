import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot ){
    //we used sessionStorage to get the Item which we have stored while logging in
        let flag = false ;
        let user = sessionStorage.getItem("username");
    
        if( user )
            flag=true;
        
        return flag ;
    
    
    }
}
