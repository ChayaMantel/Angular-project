import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../../models/recipe.model';


@Component({
  selector: 'app-small-recipe',
  standalone: false,
  templateUrl: './small-recipe.component.html',
  styleUrl: './small-recipe.component.css'
})
export class SmallRecipeComponent implements OnInit {

  @Input()
  public recipe!: Recipe;

  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  navigateToRecipeDetails(){
   
      this.router.navigate(['/recipe/recipe-details', this.recipe.recipeCode]);
    }
    
  }

