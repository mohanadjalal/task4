import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userFull } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  userId: any;
  user: userFull | undefined;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.paramMap.subscribe(
      (params) => (this.userId = params.get('id'))
    );
  }

  ngOnInit(): void {
    this.userService
      .getUserById(this.userId)
      .subscribe((res) => (this.user = res));
  }
}
