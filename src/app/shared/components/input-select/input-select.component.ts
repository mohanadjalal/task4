import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseControl } from '../../baseControl';
import { SelectInput } from '../../selectInput';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css'],
})
export class InputSelectComponent implements OnInit {
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
