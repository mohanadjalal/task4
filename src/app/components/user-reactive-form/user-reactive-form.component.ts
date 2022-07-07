import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFormModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { duplicateNameValidator } from 'src/app/shared/duplicateNameValidator';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css'],
})
export class UserReactiveFormComponent implements OnInit {
  id: any;
  user: any;
  errors: any = [];
  firstName: any;
  lastName: any;
  email: any;

  success = '';
  titles = ['mr', 'ms', 'mrs', 'miss', 'dr', ''];
  genders = ['male', 'female', 'other'];

  userForm = new FormGroup(
    {
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      ]),
      title: new FormControl(''),
      gender: new FormControl(''),
      picture: new FormControl(''),
    },
    { validators: duplicateNameValidator }
  );
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userSer: UserService
  ) {
    this.activatedRoute.paramMap.subscribe(
      (params) => (this.id = params.get('id'))
    );
  }

  ngOnInit(): void {
    this.firstName = this.userForm.get('firstName');
    this.lastName = this.userForm.get('lastName');
    this.email = this.userForm.get('email');

    if (this.id)
      this.user = this.userSer.getUserById(this.id).subscribe((res) => {
        this.userForm.patchValue({
          firstName: res.firstName,
          lastName: res.lastName,
          email: res.email,
          title: res.title,
          gender: res.gender,
          picture: res.picture,
        });
        this.userForm.get('email')?.disable();
      });
  }

  onSubmit() {
    this.errors = [];

    if (this.id) {
      const body = { ...this.userForm.value };
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
      const { title, gender, picture, ...body } = this.userForm.value;

      this.userSer.createUser(body).subscribe(
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
    console.log(this.firstName.errors);

    this.router.navigate(['users']);
  }
}
