import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { LogoutComponent } from './component/logout/logout.component';




const authenticationRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path:'logout',component:LogoutComponent}
  
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(authenticationRoutes)
    ],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
