import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseControl } from '../baseControl';

@Injectable({
  providedIn: 'root',
})
export class InputControlService {
  constructor() {}

  toFormGroup(inputs: BaseControl<string>[]) {
    const group: any = {};

    inputs.forEach((question) => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
