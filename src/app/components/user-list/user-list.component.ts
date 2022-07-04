import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List, userPreview } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: userPreview[] = [];
  constructor(private userSer: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userSer.getUsers().subscribe((res) => (this.users = [...res.data]));
  }

  createUser() {
    this.router.navigate(['user-form']);
  }

  updateUser(id: any) {
    this.router.navigate(['user-form', id]);
  }

  deleteUser(id: any) {
    this.userSer.deleteUser(id).subscribe((res) => this.getUsers());
  }

  moveToDetails(id: number): void {
    this.router.navigate(['user-details', id]);
  }
}
