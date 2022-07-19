import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseControl } from '../../baseControl';

@Component({
  selector: 'app-input',
  templateUrl: './dynamic-from-input.component.html',
  styleUrls: ['./dynamic-from-input.component.css'],
})
export class DynamicFromInputComponent implements OnInit {
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
