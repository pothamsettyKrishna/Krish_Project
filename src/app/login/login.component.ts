import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder){}

  loginForm : any;

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      userPassword: ['', [Validators.required]]
    });
  }

  userLogin(){
    console.log(this.loginForm)
  }
}
