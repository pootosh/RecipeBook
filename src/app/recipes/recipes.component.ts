import { Component } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe: Recipe;
  constructor(){

  }
  afterRecipeSelect(event:Recipe){

    this.selectedRecipe = event;
    console.log(this.selectedRecipe)
  }



}
