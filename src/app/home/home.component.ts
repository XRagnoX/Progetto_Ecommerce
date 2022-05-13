import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addToWishList(){
    console.log("Aggiunto alla WishList!")
  }

  addToCart(){
    console.log("Aggiunto al Carrello")
  }

  removeFromCart(){
    console.log("Rimosso dal Carrello")
  }

}
