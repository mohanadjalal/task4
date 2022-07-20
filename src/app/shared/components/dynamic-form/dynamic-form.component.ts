import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { BaseControl } from '../../baseControl';
import { duplicateNameValidator } from '../../duplicateNameValidator';
import { InputControlService } from '../../services/input-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() inputs: BaseControl<any>[] | null = [];
  @Input() formValidators!: ValidatorFn;

  @Output() formValue: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  form!: FormGroup;

  constructor(private qcs: InputControlService, userSer: UserService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.inputs as BaseControl<string>[]);
    this.form.addValidators(this.formValidators);

    this.formValue.emit(this.form);
  }
  onSubmit() {
    this.submit.emit();
  }
}
