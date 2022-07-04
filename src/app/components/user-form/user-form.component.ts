import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateUser, UserCreate } from 'src/app/models/user.model';
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
  createModel: UserCreate = {
    firstName: '',
    lastName: '',
    email: '',
  };
  updateModel: UpdateUser = {
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
        this.updateModel.title = res.title;
        this.updateModel.firstName = res.firstName;
        this.updateModel.lastName = res.lastName;
        this.updateModel.gender = res.gender;
        this.updateModel.picture = res.picture;
      });
  }
  onSubmit() {
    if (this.id) {
      this.userSer.updateUser(this.id, this.updateModel).subscribe(
        (res) => {
          this.success = 'User data Updated successfuly';
          setTimeout(() => {
            this.backToUserList();
          }, 2000);
        },
        (err) => (this.errors = err.message)
      );
    } else {
      this.userSer.createUser(this.createModel).subscribe(
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
