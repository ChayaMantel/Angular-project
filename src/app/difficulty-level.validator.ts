import { AbstractControl, ValidatorFn } from '@angular/forms';

export const difficultyLevelRangeValidator: ValidatorFn = (control: AbstractControl) => {
  const value = control.value as number; // Cast to number
  if (value < 1 || value > 5) {
    return { difficultyLevelRange: true };
  }
  return null;
};
