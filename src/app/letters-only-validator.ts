import { FormControl, ValidatorFn } from '@angular/forms';

export const lettersOnlyValidators: ValidatorFn = () => {
  return (control: FormControl) => {
    return control.value && !/^[a-zA-Z]+$/.test(control.value)
      ? { lettersOnly: true }
      : null;
  };
};
