import { Component, Input, EventEmitter, Output, } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input('recipe') recipe: Recipe;
  @Output() recipeShow= new EventEmitter<void>();


  onSelectRecipe(recipe: Recipe){

    this.recipeShow.emit(
      );

  }

  constructor(){

  }

}
