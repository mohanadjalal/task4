import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseControl } from '../../baseControl';
import { TextInput } from '../../textInput';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent implements OnInit {
  @Input() input!: BaseControl<string>;
  @Input() form!: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  get inValid() {
    return (
      this.form.controls[this.input.key].invalid &&
      this.form.controls[this.input.key].touched
    );
  }
}
