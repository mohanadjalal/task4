import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { BaseControl } from 'src/app/shared/baseControl';
import { SelectInput } from 'src/app/shared/selectInput';
import { InputService } from 'src/app/shared/services/input.service';
import { TextInput } from 'src/app/shared/textInput';
import { duplicateNameValidator } from 'src/app/shared/duplicateNameValidator';

@Component({
  selector: 'app-user-dy-form',
  templateUrl: './user-dy-form.component.html',
  styleUrls: ['./user-dy-form.component.css'],
})
export class UserDyFormComponent implements OnInit {
  inputs: Observable<BaseControl<string>[]>;

  createInputs = [
    new TextInput({
      key: 'firstName',
      value: '',
      label: 'First Name',
      type: 'text',
      required: true,
      order: 1,
      validators: { minLength: 2 },
    }),

    new TextInput({
      key: 'lastName',
      value: '',
      label: 'Last Name',
      type: 'text',
      required: true,
      validators: { minLength: 2 },
      order: 2,
    }),
    new TextInput({
      key: 'email',
      value: '',
      label: 'Email',
      type: 'email',
      required: true,
      order: 3,
    }),
  ];
  updateInputs = [
    new SelectInput({
      key: 'gender',
      label: 'Gender',
      order: 4,
      options: [
        { key: 'male', value: 'Male' },
        { key: 'female', value: 'Female' },
      ],
    }),
    new SelectInput({
      key: 'title',
      label: 'Title',
      order: 5,
      options: [
        { key: 'mr', value: 'mr' },
        { key: 'ms', value: 'ms' },
        { key: 'mrs', value: 'mrs' },
        { key: 'miss', value: 'miss' },
        { key: 'dr', value: 'dr' },
      ],
    }),
    new TextInput({
      key: 'picture',
      value: '',
      label: 'Picture',
      type: 'text',
      order: 6,
    }),
  ];
  id: any;
  user: any;
  errors: any = [];

  success = '';

  form!: FormGroup;
  constructor(
    private inputService: InputService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userSer: UserService
  ) {
    this.inputService.setInputs(this.createInputs);
    this.inputs = inputService.getInputs();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this.user = this.userSer.getUserById(this.id).subscribe((res) => {
          this.form.patchValue(res);
        });
        this.createInputs[2].disable = true;
        this.inputService.setInputs([
          ...this.createInputs,
          ...this.updateInputs,
        ]);
        this.inputs = this.inputService.getInputs();
      }
    });
  }

  onSubmit() {
    console.log('submit');
    this.errors = [];
    if (this.id) {
      const { email, ...body } = this.form.getRawValue();
      this.userSer.updateUser(this.id, body).subscribe(
        (res) => {
          this.success = 'User data Updated successfully';
          setTimeout(() => {
            this.backToUserList();
          }, 2000);
        },
        (err) => (this.errors = err.message)
      );
    } else {
      this.userSer.createUser(this.form.getRawValue()).subscribe(
        (res) => {
          this.success = 'User created successfully';
          setTimeout(() => {
            this.backToUserList();
          }, 2000);
        },
        (err) => {
          for (const key in err.error.data) {
            this.errors.push(err.error.data[key].replace('Path', ''));
          }
        }
      );
    }
  }

  backToUserList() {
    this.router.navigate(['users']);
  }
  customValidate() {
    return duplicateNameValidator;
  }
}
