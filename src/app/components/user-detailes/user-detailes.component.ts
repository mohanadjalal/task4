import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detailes',
  templateUrl: './user-detailes.component.html',
  styleUrls: ['./user-detailes.component.css'],
})
export class UserDetailesComponent implements OnInit {
  userId: any;
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe(
      (params) => (this.userId = params.get('id'))
    );
  }

  ngOnInit(): void {
    
  }
}
