import { Ingredient } from './../shared/ingredient.model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {


  ingredients : Ingredient[]= [
    new Ingredient('Apple', 100),
    new Ingredient('Oranges', 1080),
  ];

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
  }

}
