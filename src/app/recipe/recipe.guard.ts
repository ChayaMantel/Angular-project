import { CanActivateFn } from '@angular/router';

export const recipeGuard: CanActivateFn = (route, state) => {
  const userDetails = sessionStorage.getItem('currentUser');

  if (userDetails) {
    return true;
  } else {
    return false;
  }
}