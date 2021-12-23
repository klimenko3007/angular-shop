import { Component, Input } from "@angular/core";
import { Recipe } from "@recipes/recipe.model";
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

} 