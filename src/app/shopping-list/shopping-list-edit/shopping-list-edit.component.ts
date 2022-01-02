import { Component, ElementRef, ViewChild } from '@angular/core';
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

  onIngredientAdded() {
    this.shoppingListService.addedIngredient.emit( {
      name: this.ingredientName.nativeElement.value,
      amount: this.ingredientAmount.nativeElement.value
    });
  }
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  // onIngredientAdded () {
  //   this.ingredientAdded.emit({
  //     name: this.ingredientName.nativeElement.value,
  //     amount: this.ingredientAmount.nativeElement.value
  //   });
  // }
}
