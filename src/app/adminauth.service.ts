import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
//here dependency injection takes place
@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot ){
    //we used sessionStorage to get the Item which we have stored while logging in
        let flag = false ;
        let user = sessionStorage.getItem("adminname");
    
        if( user )
            flag=true;
        
        return flag ;
    
    
    }
}
