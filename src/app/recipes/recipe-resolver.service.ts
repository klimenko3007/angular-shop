import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorage } from "@shared/data-storage.service";
import { Observable } from "rxjs";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn: 'root'})
export class ReciipeResolverService implements Resolve<Recipe[]> {
  constructor(private dataStorageService: DataStorage, private recipeService: RecipeService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    const recipes = this.recipeService.getRecipes();
    if(recipes.length === 0) {
      return this.dataStorageService.getRecipes();
    } else {
      return recipes;
    }
  }
}