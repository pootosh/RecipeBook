import { Ingredient } from './../../shared/ingredient.model';
import { ElementRef } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild("itemName") itemName: ElementRef;
  @ViewChild("itemAmount") itemAmount: ElementRef;

  @Output("ingredientData") newIngredient= new EventEmitter<Ingredient>();

  onAddItem(){

    this.newIngredient.emit(new Ingredient(
      this.itemName.nativeElement.value,
      this.itemAmount.nativeElement.value
    ))
  }
}
