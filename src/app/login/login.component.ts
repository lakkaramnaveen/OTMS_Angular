import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  user1:User=new User();
  str:string;
  flag:boolean=false;
  constructor(private service: UserService, private router:Router,) { }
  ngOnInit(): void {
  }

  login(){
     this.str = this.user.userName;
      this.service.validateUser(this.user.userName.trim(),this.user.userPassword).subscribe(
        (user)=>{sessionStorage.setItem("username",this.str);this.goto();},
        error =>{console.log(error);this.admin()}     
      );
  }
  admin(){
    this.str = this.user.userName;
    this.service.validateAdmin(this.user.userName.trim(),this.user.userPassword).subscribe((user)=>{sessionStorage.setItem("adminname",this.str);this.goto1()},
    error =>{console.log(error);alert('Invalid Username or Password');window.location.pathname='/login';});  
  }

  goto(){
    this.router.navigate(['/display']);
  }

  goto1(){
    this.router.navigate(['/display2']);
  }

}
