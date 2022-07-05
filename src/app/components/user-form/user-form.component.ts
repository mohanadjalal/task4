import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFormModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  id: any;
  user: any;
  errors: any = [];
  success = '';

  model: UserFormModel = {
    email: '',
    title: '',
    firstName: '',
    lastName: '',
    gender: 'male',
    picture: '',
  };

  titles = ['mr', 'ms', 'mrs', 'miss', 'dr', ''];
  genders = ['male', 'female', 'other'];

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
    if (this.id)
      this.user = this.userSer.getUserById(this.id).subscribe((res) => {
        this.model.title = res.title;
        this.model.firstName = res.firstName;
        this.model.lastName = res.lastName;
        this.model.gender = res.gender;
        this.model.picture = res.picture;
        this.model.email = res.email;
      });
  }
  onSubmit() {
    let { gender, title, picture, ...createBody } = this.model;
    let { email, ...updateBody } = this.model;

    if (this.id) {
      this.userSer.updateUser(this.id, updateBody).subscribe(
        (res) => {
          this.success = 'User data Updated successfuly';
          setTimeout(() => {
            this.backToUserList();
          }, 2000);
        },
        (err) => (this.errors = err.message)
      );
    } else {
      this.userSer.createUser(createBody).subscribe(
        (res) => {
          this.success = 'User created successfuly';
          setTimeout(() => {
            this.backToUserList();
          }, 2000);
        },
        (err) => {
          this.errors = [];
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
}
