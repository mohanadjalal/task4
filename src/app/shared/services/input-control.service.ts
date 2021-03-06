import { Injectable, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BaseControl } from '../baseControl';

@Injectable({
  providedIn: 'root',
})
export class InputControlService {
  constructor(private fb: FormBuilder) {}

  toFormGroup(inputs: BaseControl<string>[]) {
    const group: any = {};

    inputs.forEach((input) => {
      const valds = this.getValidators(input);

      if (input.type === 'array') {
        group[input.key] = this.fb.array([]);
      } else {
        group[input.key] = input.required
          ? new FormControl(
              { value: input.value || '', disabled: input.disable },
              [Validators.required, ...valds]
            )
          : new FormControl(
              { value: input.value || '', disabled: input.disable },
              valds
            );
      }
    });
    return new FormGroup(group);
  }

  getValidators(input: BaseControl<string>) {
    const validators = [];
    if (input.type === 'email') validators.push(Validators.email);
    if (Object.keys(input.validators).length !== 0) {
      for (const key in input.validators) {
        if (key === 'minLength')
          validators.push(
            Validators.minLength(
              input.validators[key as keyof typeof input.validators]
            )
          );
        if (key === 'min')
          validators.push(
            Validators.min(
              input.validators[key as keyof typeof input.validators]
            )
          );
      }
    }
    return validators;
  }
}
