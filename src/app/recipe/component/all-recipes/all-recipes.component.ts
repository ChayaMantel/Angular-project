import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Category } from '../../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {
[x: string]: any;
  public recipeList: Recipe[] = [];
  public filterForm!: FormGroup;
  public categoryList: Category[] = [];

  constructor(private _recipeService: RecipeService, private _categoryService: CategoryService) { }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      "name": new FormControl(""),
      "category": new FormControl(null),
      "preparationTime": new FormControl(null)
    });

    this.loadRecipes();
    this.loadCategories();
  }

  loadRecipes() {
    this._recipeService.getRecipeList().subscribe({
      next: (res) => {
        this.recipeList = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  loadCategories() {
    this._categoryService.getCategoryList().subscribe({
      next: (res) => {
        this.categoryList = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
 
    
  
  applyFilters(recipe: Recipe): boolean {
    const filterValues = this.filterForm.value;
    let passNameFilter = true;
    let passCategoryFilter = true;
    let passPreparationTimeFilter = true;


    if (filterValues.name && filterValues.name.trim() !== '') {
      passNameFilter = recipe.recipeName.toLowerCase().includes(filterValues.name.trim().toLowerCase());
    }


    if (filterValues.category !== null) {
           passCategoryFilter = recipe.categoryCode == filterValues.category;
    }


    if (filterValues.preparationTime !== null) {
      const preparationTime = recipe.preparationTimeMinutes;
      switch (filterValues.preparationTime) {
        case 'short':
          passPreparationTimeFilter = preparationTime < 30;
          break;
        case 'medium':
          passPreparationTimeFilter = preparationTime >= 30 && preparationTime <= 60;
          break;
        case 'long':
          passPreparationTimeFilter = preparationTime > 60;
          break;
      }
    }

    return passNameFilter && passCategoryFilter && passPreparationTimeFilter;
  }
}
