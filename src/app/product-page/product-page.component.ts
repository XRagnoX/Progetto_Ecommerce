import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  mainPhoto:string ="assets/img/air-jordan.png"
  tinyPicOne:string="assets/img/air-jordan.png"
  tinyPicTwo:string="assets/img/adidas-alpha.png"
  tinyPicThree:string="assets/img/puma-sneakers.png"
  tinyPicFour:string="assets/img/vans-sneakers.png"

  selectedColor:string=""

  colorValue1:any = {
    "colorName":"Nero",
    "colorCode":"background-color:#222"
  }

  colorValue2:any = {
    "colorName":"Blu",
    "colorCode":"background-color:#6e8cd5"
  }

  colorValue3:any = {
    "colorName":"Verde",
    "colorCode":"background-color:#44c28d"
  }

  constructor() { 

    this.selectedColor=this.colorValue1.colorName
  }

  ngOnInit(): void {
  }

  changeMainPhoto(photo:string){
    this.mainPhoto =photo;
  }

}
