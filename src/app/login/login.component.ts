import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  regexMail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
  subscribeForm = new FormGroup({
    mail: new FormControl('',[Validators.minLength(1),Validators.required,Validators.pattern(this.regexMail)]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  })
  
  subscribe(){}
}
