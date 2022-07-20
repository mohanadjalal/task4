import { Injectable, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseControl } from '../baseControl';

@Injectable({
  providedIn: 'root',
})
export class InputControlService {
  constructor() {}

  toFormGroup(inputs: BaseControl<string>[]) {
    const group: any = {};

    inputs.forEach((input) => {
      const valds = [];
      if (input.type === 'email') valds.push(Validators.email);
      if (Object.keys(input.validators).length !== 0) {
        for (const key in input.validators) {
          if (key === 'minLength')
            valds.push(
              Validators.minLength(
                input.validators[key as keyof typeof input.validators]
              )
            );
        }
      }
      group[input.key] = input.required
        ? new FormControl(
            { value: input.value || '', disabled: input.disable },
            [Validators.required, ...valds]
          )
        : new FormControl(
            { value: input.value || '', disabled: input.disable },
            valds
          );
    });
    return new FormGroup(group);
  }
}
