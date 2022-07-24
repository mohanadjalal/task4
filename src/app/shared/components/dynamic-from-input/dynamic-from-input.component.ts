import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseControl } from '../../baseControl';

@Component({
  selector: 'app-input',
  templateUrl: './dynamic-from-input.component.html',
  styleUrls: ['./dynamic-from-input.component.css'],
})
export class DynamicFromInputComponent implements OnChanges {
  @Input() input!: BaseControl<string>;
  @Input() form!: FormGroup;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
  get errors() {
    return this.form.controls[this.input.key].errors;
  }
  get inValid() {
    return (
      this.form.controls[this.input.key].invalid &&
      this.form.controls[this.input.key].touched
    );
  }

  get control() {
    return this.form.controls[this.input.key];
  }
}
