import { Injectable } from '@angular/core';
import { Ingredient } from '@shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  changedIngredients = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('bananas', 6)
  ];


  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index].name = ingredient.name;
    this.ingredients[index].amount = ingredient.amount;
    this.changedIngredients.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients = [...this.ingredients, ingredient];
    this.changedIngredients.next(this.ingredients.slice());
  }

  deleteIngredient(ingredientName: string) {
    this.ingredients = this.ingredients.filter((ingredient) => ingredient.name !== ingredientName);
    this.changedIngredients.next(this.ingredients.slice());
  }
}
