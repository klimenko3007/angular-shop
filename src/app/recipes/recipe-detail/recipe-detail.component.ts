import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Recipe } from "@recipes/recipe.model";
import { RecipeService } from "@recipes/recipe.service";
import { Subscription } from "rxjs";
//import { Ingredient } from "@shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy{
  recipe: Recipe;
  id: number;
  paramsSubscription: Subscription;
  
  constructor( 
    private slService: ShoppingListService, 
    private route: ActivatedRoute,
    private recipeService: RecipeService
    ) {}
  
  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.recipe = this.recipeService.findRecipeById(this.id);
        }
      );
    
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }


  addToShoppingList(){
    this.slService.ingredients.push(...this.recipe.ingredients);
    this.slService.changedIngredients.emit(this.slService.ingredients.slice());
  }

} 