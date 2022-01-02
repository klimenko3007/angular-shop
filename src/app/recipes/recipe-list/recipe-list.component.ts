import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '@recipes/recipe.model';
import { RecipeService } from '@recipes/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe [];
  @Output() recipeClicked = new EventEmitter<Recipe>();
  
  onRecipeClicked(recipe: Recipe) {
    this.recipeClicked.emit(recipe);
  }
  constructor(private recipeService: RecipeService) {}
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
