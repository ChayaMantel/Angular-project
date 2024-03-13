import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { recipeGuard } from './recipe.guard';
import { AllRecipesComponent } from './component/all-recipes/all-recipes.component';
import { RecipeDetailsComponent } from './component/recipe-details/recipe-details.component';
import { AddRecipeComponent } from './component/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './component/edit-recipe/edit-recipe.component';


const recipeRoutes: Routes = [
    { path: '', redirectTo: 'all-recipes', pathMatch: 'full' },
    { path: 'all-recipes', component: AllRecipesComponent },
    { path: 'recipe-details/:id', component: RecipeDetailsComponent, canActivate: [recipeGuard] },
    { path: 'add-recipe', component: AddRecipeComponent },
    { path: 'edit-recipe/:id', component: EditRecipeComponent }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(recipeRoutes)
    ],
    exports: [RouterModule]
})
export class RecipeRoutingModule { }
