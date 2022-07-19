import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userSer: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this.user = this.userSer.getUserById(this.id).subscribe((res) => {});
      }
    });
  }

  onSubmit() {
    this.errors = [];

  }
  backToUserList() {
    console.log(this.firstName.errors);

    this.router.navigate(['users']);
  }
}
