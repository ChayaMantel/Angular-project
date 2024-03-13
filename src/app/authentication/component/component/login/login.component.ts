import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../../../user.model';
import { UserService } from '../../../../user.service';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  errorMessage: string = '';
  public usersList: User[] = []

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "username": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required]),
    }),
      this._userService.getUserList().subscribe({
        next: (res) => {
          this.usersList = res
        },
        error: (err) => {
          console.log(err);
        }
      })

  }

  onSubmit(): void {


    const username = this.loginForm.get('username')!.value;
    const password = this.loginForm.get('password')!.value;
    const userExists = this.usersList.find(user => user.name === username);
    if (userExists) {

      if (userExists.password === password) {
        sessionStorage.setItem('currentUser', JSON.stringify(userExists));
        this.router.navigate(["/recipe/all-recipes"])
      }
      else {

        this.errorMessage = 'Incorrect password';
      }
    }
    else {
      this.router.navigate(["/authentication/register"], { queryParams: { name: username } });
    }
  }
}





