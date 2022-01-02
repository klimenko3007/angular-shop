import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '@shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  // onIngredientAdded () {
  //   this.ingredientAdded.emit({
  //     name: this.ingredientName.nativeElement.value,
  //     amount: this.ingredientAmount.nativeElement.value
  //   });
  // }
}
