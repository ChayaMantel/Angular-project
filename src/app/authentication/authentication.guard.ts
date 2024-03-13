import { CanActivateFn } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const userDetails = sessionStorage.getItem('user');
  if (userDetails) {
    return true;
  } else {
   
    return false;
  }
};
