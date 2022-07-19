import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseControl } from 'src/app/shared/baseControl';
import { SelectInput } from 'src/app/shared/selectInput';
import { InputService } from 'src/app/shared/services/input.service';
import { TextInput } from 'src/app/shared/textInput';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  inputs: Observable<BaseControl<string>[]>;
  inputAr = [
    new TextInput({
      key: 'firstName',
      value: '',
      label: 'First Name',
      type: 'text',
      required: true,
      order: 1,
    }),

    new TextInput({
      key: 'lastName',
      value: '',
      label: 'Last Name',
      type: 'text',
      required: true,
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
  constructor(private inputService: InputService) {
    this.inputService.setInputs(this.inputAr);
    this.inputs = inputService.getInputs();
  }

  ngOnInit(): void {}
}
