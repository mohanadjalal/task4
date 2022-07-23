import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ArrayInput } from '../../arrayInput';
import { BaseControl } from '../../baseControl';

@Component({
  selector: 'app-array-from',
  templateUrl: './array-from.component.html',
  styleUrls: ['./array-from.component.css'],
})
export class ArrayFromComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() input!: ArrayInput;
  arrayForm: FormArray<any> = new FormArray<any>([]);
  inputs: BaseControl<string>[] = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.arrayForm = this.form.get(this.input.key) as FormArray;
  }

  addInput() {
    this.arrayForm?.push(this.fb.control(''));
  }

  getInputs() {
    return this.arrayForm as FormArray;
  }

  deleteInput(controlIndex: any) {
    this.arrayForm.removeAt(controlIndex);
  }
}
