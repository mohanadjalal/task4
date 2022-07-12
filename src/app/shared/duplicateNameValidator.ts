import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export const duplicateNameValidator: ValidatorFn = (
  form: AbstractControl
): ValidationErrors | null => {
  const firstName = form.get('firstName');
  const lastName = form.get('lastName');

  return firstName && lastName && firstName?.value === lastName?.value
    ? { duplicate: true }
    : null;
};
