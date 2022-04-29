import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '@recipes/recipe.model';
import { RecipeService } from '@recipes/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe [];
  private subscription: Subscription;
  
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  goToNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
     this.subscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
