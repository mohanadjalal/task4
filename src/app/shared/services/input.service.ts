import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseControl } from '../baseControl';
import { SelectInput } from '../selectInput';
import { TextInput } from '../textInput';

@Injectable({
  providedIn: 'root',
})
export class InputService {
  inputs: BaseControl<string>[] = [];
  constructor() {}
  addInput(input: BaseControl<string>): Observable<BaseControl<string>> {
    this.inputs.push(input);
    return of(input);
  }

  setInputs(inputAr: BaseControl<string>[]): void {
    this.inputs = inputAr;
  }

  getInputs() {
    return of(this.inputs.sort((a, b) => a.order - b.order));
  }
}
