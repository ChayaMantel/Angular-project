import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../../recipe.model';
import { RecipeService } from '../../../recipe.service';
import { CategoryService } from '../../../category.service';
import { Category } from '../../../category.model';

@Component({
  selector: 'app-recipe-details',
  standalone: false,
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {
  public recipe!:Recipe
  public currentUser!:any; 
  public caregoryList: Category[] = [];
  public categoryName!:string;

  constructor(private _recipeService:RecipeService,private _categoryService:CategoryService,  private route: ActivatedRoute,private router:Router) {
  
  }
  
  ngOnInit(): void {
    const recipeId = Number(this.route.snapshot.paramMap.get('id'));
    this._recipeService.getRecipetById(recipeId).subscribe({
      next: (res) => {
        this.recipe = res
        console.log(this.recipe)
      },
      error: (err) => {
        console.log(err);
      }
    })

    this.currentUser = sessionStorage.getItem('currentUser');

    this._categoryService.getCategoryList().subscribe({
      next: (res) => {
        this.caregoryList = res
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  range(length: number): any[] {
    return Array(length).fill(null);
  }

  getCategoryName(){
    
    return this.caregoryList.find(category => category.code === this.recipe.categoryCode)?.name ;

  }
  getCategoryIcon(){
    
    return this.caregoryList.find(category => category.code === this.recipe.categoryCode)?.iconRouting ;
  }
  isCurrentUserRecipeCreator(): boolean {
  
    if (!this.currentUser) {
      return false;
    }
    const parsedCurrentUser = JSON.parse(this.currentUser);
    return parsedCurrentUser.code == this.recipe.userCode;
  }
  edit() {
    this.router.navigate(['recipe/edit-recipe',this.recipe.recipeCode]);
  }
  deleteRecipe(): void {
    this._recipeService.deleteRecipe(this.recipe.recipeCode).subscribe({
      next: (response) => {
         console.log("the recipe deleted successfully!!!");
         
      },
      error: (error) => {
        console.error("Error adding user:", error);
      }
    });
  }
  
}
