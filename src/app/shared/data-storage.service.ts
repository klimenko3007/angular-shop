import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '@recipes/recipe.model';
import { RecipeService } from '@recipes/recipe.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorage {
 private url = 'https://recipe-book-angular-91cd3-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'; 
  constructor(private http: HttpClient, private recipeService: RecipeService){}

  public storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.url, recipes).subscribe(response => (console.log(response)));
  }

  public getRecipes(){
   return this.http
            .get<Recipe[]>(this.url)
            .pipe(
              map(recipes => recipes.map( recipe => {
              return {...recipe, ingredients: recipe.ingredients? recipe.ingredients : []};
            })),
              tap((recipes) => this.recipeService.setRcipes(recipes))
            );
  }
}