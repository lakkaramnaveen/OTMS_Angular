import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminauthService } from './adminauth.service';
import { AuthguardService } from './authguard.service';
import { DisplayComponent } from './display/display.component';
import { Display2Component } from './display2/display2.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//this is where we specify all the routes and uri path
//we also used Authguard service canActivate method in constant
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'display', component: DisplayComponent ,  canActivate : [AuthguardService]},
  { path:'display2', component: Display2Component ,  canActivate : [AdminauthService]},
  {
    path : '',
    redirectTo : '/login',
    pathMatch : 'full'
  },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


