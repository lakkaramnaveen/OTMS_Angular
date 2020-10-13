import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { Display2Component } from './display2/display2.component';
import { LoginComponent } from './login/login.component';
//here we will specify the module and imports that we use across the application
//we will configure what we need, some are done by default like Components
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    Display2Component,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]//it automatically calls AppComponent class
  //bootstrap is used to specify which component to call it is different from bootstrap styling
})
export class AppModule { }

