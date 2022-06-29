import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  postsList: any;
  userId: any;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe(
      (params) => (this.userId = params.get('id'))
    );
  }

  ngOnInit(): void {
    this.postService
      .getListByUser(this.userId)
      .subscribe((res) => (this.postsList = res.data));
  }

  getPosts() {}
}
