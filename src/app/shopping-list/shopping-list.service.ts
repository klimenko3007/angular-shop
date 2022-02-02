import { Injectable } from '@angular/core';
import { Ingredient } from '@shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  changedIngredients = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('bananas', 6)
  ];


  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients = [...this.ingredients, ingredient];
    this.changedIngredients.next(this.ingredients.slice());
  }
}
