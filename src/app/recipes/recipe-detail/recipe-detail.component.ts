import { Component, Input } from "@angular/core";
import { Recipe } from "@recipes/recipe.model";
import { Ingredient } from "@shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
  constructor( private slService: ShoppingListService) {}
  
  addToShoppingList(){
    this.recipe.ingredients.forEach((ingredient: Ingredient) => {
      this.slService.addIngredient(ingredient);
    });
  }

} 