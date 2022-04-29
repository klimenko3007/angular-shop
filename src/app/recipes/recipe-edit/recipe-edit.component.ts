import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '@recipes/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  
  constructor( 
      private route: ActivatedRoute, 
      private recipeService: RecipeService,
      private router: Router,
      ) { }

  get ingredientsArray() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
   }

  formInit () {
    const editedRecipe = {
      name: '',
      description: '',
      imagePath: '',
      ingredients: new FormArray([])
    };
    
    if(this.editMode) {
      const recipe = this.recipeService.findRecipeById(this.id);
      editedRecipe.name = recipe.name; 
      editedRecipe.description = recipe.description, 
      editedRecipe.imagePath= recipe.imagePath;

      if(recipe.ingredients) {
        recipe.ingredients.forEach((ingredient) => {
          editedRecipe.ingredients.push( new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          }));
        });
      }
    }
    
    this.recipeForm = new FormGroup ({
      name: new FormControl(editedRecipe.name, Validators.required),
      imagePath: new FormControl(editedRecipe.imagePath, Validators.required),
      description: new FormControl(editedRecipe.description, Validators.required),
      ingredients: editedRecipe.ingredients
    
    });
  }

  clearForm() {
    this.router.navigate(['../'], {relativeTo: this.route}); 
  }

  onRecipeSave() {
    const recipe = this.recipeForm.value;

    if(this.editMode) {
      this.recipeService.updateRecipeByID(this.id, recipe);
    } else {
      this.recipeService.addRecipe(recipe);
    }
    this.clearForm();
  }
  onIngredientAdd() {
    (this.recipeForm.get('ingredients')as FormArray).push(new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    }));
  }

  onIngredientDelete(index: number) {
    (this.recipeForm.get('ingredients')as FormArray).removeAt(index);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null; // checking whether there is params if there are none we are in new recipe mode
        this.formInit();
      }
    );

  }

}
