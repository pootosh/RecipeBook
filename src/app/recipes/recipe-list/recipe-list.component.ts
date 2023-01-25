import { Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {


  @Output() recipeSelectedEvent = new EventEmitter<Recipe>();

  recipes : Recipe[] = [

    new Recipe(
      'Test Recipe',
      'Test Description',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1920,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg'
    ),

    new Recipe(
      'Another Test Recipe',
      'Test Description',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1920,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg'
    )

  ];

  recipeSelected(recipe: Recipe){
    this.recipeSelectedEvent.emit(recipe);
  }
}
