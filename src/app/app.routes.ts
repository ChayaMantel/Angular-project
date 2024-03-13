import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
    
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent) },
  { path: 'recipe', loadChildren: () => import('./recipe/recipe.module').then(c => c.RecipeModule) },
  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(c => c.AuthenticationModule) },
  { path: '**', component: NotFoundComponent }

  ];
