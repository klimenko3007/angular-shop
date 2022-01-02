import { Injectable } from '@angular/core';
import { Ingredient } from '@shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('bananas', 6)
  ];

  //constructor() { }

  addIngredient (ingredient: Ingredient) {
    this.ingredients = [...this.ingredients, ingredient];
  }
}
