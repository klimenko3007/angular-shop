import { Component, OnDestroy, OnInit } from "@angular/core";
import { Ingredient } from "@shared/ingredient.model";
import { Subscription } from "rxjs";
import { ShoppingListService } from "./shopping-list.service";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscribtion: Subscription;

  constructor( private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscribtion = this.shoppingListService.changedIngredients.subscribe(
      (ingredients: Ingredient[]) => this.ingredients = ingredients
    );
  }
  ngOnDestroy(): void {
      this.subscribtion.unsubscribe();
  }
}