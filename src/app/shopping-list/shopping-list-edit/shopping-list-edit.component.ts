import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '@shared/ingredient.model';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('shoppingListForm', {static: false}) shoppingListForm: NgForm;
  subscribtion = new Subscription();
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  onFormSubmit(form: NgForm) {
    const value = form.value;
    if(this.editMode) {
      const ingredient= {name: value.name, amount: value.amount};
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient( {
        name: value.name,
        amount: value.amount
      });
    }
    this.clearForm(form);
  }
  clearForm (form: NgForm) {
    form.reset();
    this.editMode = false;
  }

  onDeleteButtonClicked (form: NgForm) {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.clearForm(form);
  }

  ngOnInit () {
    this.subscribtion = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.shoppingListForm.setValue({name: this.editedItem.name, amount: this.editedItem.amount});
    });
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
