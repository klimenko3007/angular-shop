import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
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
  
  constructor( private route: ActivatedRoute, private recipeService: RecipeService) { }

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
            name: new FormControl(ingredient.name),
            amount: new FormControl(ingredient.amount)
          }));
        });
      }
    }
    
    this.recipeForm = new FormGroup ({
      name: new FormControl(editedRecipe.name),
      imagePath: new FormControl(editedRecipe.imagePath),
      description: new FormControl(editedRecipe.description),
      ingredients: editedRecipe.ingredients
    
    });
    console.log(this.recipeForm);
  }

  get ingredientsArray() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
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
