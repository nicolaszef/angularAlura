import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){

    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    console.log('authenticate')

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => console.log('autenticado'),
        err => {
          console.log(err);
          this.loginForm.reset();
        }
      )
    
  }

}