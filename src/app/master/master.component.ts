import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  regexMail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  subscribeForm = new FormGroup({
    mail: new FormControl('',[Validators.required,Validators.pattern(this.regexMail)]),
  })
  

  constructor() {
  
   }

  ngOnInit(): void {
  }

  subscribe(){

  }

}
