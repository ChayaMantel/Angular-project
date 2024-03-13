import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/component/login/login.component';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './component/logout/logout.component';



@NgModule({
  declarations: [RegisterComponent,LoginComponent,LogoutComponent],
  imports: [
    CommonModule,ReactiveFormsModule,AuthenticationRoutingModule,RouterModule
  ]
})
export class AuthenticationModule { }