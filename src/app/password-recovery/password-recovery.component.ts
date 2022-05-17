import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  pswSent:boolean = false;

  constructor() {}

  ngOnInit(): void {}
  regexMail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
  subscribeForm = new FormGroup({
    mail: new FormControl('',[Validators.minLength(1),Validators.required,Validators.pattern(this.regexMail)]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  })
  


  subscribe(){
    this.pswSent = false;
    console.log(this.pswSent);
  }

}
