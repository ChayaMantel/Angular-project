import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private _http: HttpClient) { }

  getRecipeList():Observable<Recipe[]>{
    return this._http.get<Recipe[]>('http://localhost:5263/api/Recipe')
  }
  
  getRecipetById(id: number): Observable<Recipe> {
    return this._http.get<Recipe>(`http://localhost:5263/api/Recipe/${id}`)
  }

  addRecipe(recipe: Recipe) {
    return this._http.post('http://localhost:5263/api/Recipe', recipe)
    
  }
  deleteRecipe(id: number){
    return this._http.delete<Recipe>(`http://localhost:5263/api/Recipe/${id}`)
  }
  
  updateRecipe(id:number,recipe:Recipe){
    return this._http.put<Recipe>(`http://localhost:5263/api/Recipe/${id}`,recipe)
  }

}
