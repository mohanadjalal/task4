import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detailes',
  templateUrl: './user-detailes.component.html',
  styleUrls: ['./user-detailes.component.css'],
})
export class UserDetailesComponent implements OnInit {
  userId: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.paramMap.subscribe(
      (params) => (this.userId = params.get('id'))
    );
  }

  ngOnInit(): void {
    if (this.userId)
      this.router.navigate([
        `user-details/${this.userId}/details/`,
        this.userId,
      ]);
  }
}
