import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '@shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  changedIngredients = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('bananas', 6)
  ];


  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients = [...this.ingredients, ingredient];
    this.changedIngredients.emit(this.ingredients.slice());
  }
}
