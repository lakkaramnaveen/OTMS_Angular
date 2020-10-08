import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem("adminname");
    this.router.navigate(['/login']);
  }
}
