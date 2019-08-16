import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
//name=type
//model=name
  type:string;
  name:string;
  price:number;
  ingredients: Ingredients;
  options:string[];
  isEdit:boolean = false;

  constructor() { }

  ngOnInit() {
    this.type = 'Burger';
    this.name = 'Grand-papa';
    this.price = 7.5;
    this.ingredients = {meat:'boeuf', vegetables:'cornichons,oignon', sauce:'la sauce Teen'};
    this.options = ["Extra Cheddar Cheese", "Extra Bacon", "Extra Lettuce"];
  }

  showEdit(){
  this.isEdit = !this.isEdit;
}
addOpt(option){
    this.options.unshift(option);
    return false;
  }
  deleteOpt(option){
    // console.log(option);
    for (let i=0;i<this.options.length; i++){
      if(this.options[i]==option){
        this.options.splice(i,1);
        break;
      }
    }
  }

  ingredientSelect(ingredientName) {
    if (ingredientName=='burger'){
      this.type = 'Burger';
      this.name = 'Grand-papa';
      this.price = 7.5;
      this.ingredients = {meat:'boeuf', vegetables:'cornichons,oignon', sauce:'la sauce Teen'};
      this.options = ["Extra Cheddar Cheese", "Extra Bacon", "Extra Lettuce"];
  }else if(ingredientName=='hotdog') {
    this.type = 'HotDog';
    this.price = 6;
    this.name = 'Delicious';
    this.ingredients = {meat:'pork', vegetables:'oignon, cucumber', sauce:'mustard'};
    this.options = ["French fries", "tomato"];
  }else {
    this.type = 'Shawarma';
    this.price = 10;
    this.name = 'Super';
    this.ingredients = {meat:'mutton', vegetables:'oignon, tomato', sauce:'Tabasco'};
    this.options = ["potatoes", "cucumber"];
  }
}

}

interface Ingredients {
  meat:string,
  vegetables:string,
  sauce:string
}
