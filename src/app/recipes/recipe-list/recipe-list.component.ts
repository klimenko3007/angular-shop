import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '@recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeClicked = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple example recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272'
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is a simple example recipe 2',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272'
    ),
  ];
  onRecipeClicked(recipe: Recipe) {
    this.recipeClicked.emit(recipe)
  }
  constructor() { }

  ngOnInit(): void { }
}
