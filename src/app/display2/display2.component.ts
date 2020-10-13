import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {

  arr1: Observable<User[]>;

  constructor(private router: Router,private service: UserService) { }

  ngOnInit(): void {
    this.arr1=this.service.getUsers();
  }

  logout(){
    sessionStorage.removeItem("adminname");
    this.router.navigate(['/login']);
  }
}
