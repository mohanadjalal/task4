import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatePost } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  postList: any;
  userId: any;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    activatedRoute.paramMap.subscribe(
      (params) => (this.userId = params.get('id'))
    );
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService
      .getListByUser(this.userId)
      .subscribe((res) => (this.postList = res.data));
  }

  createPost() {
    this.router.navigate(['post-form', this.userId]);
    // const body = {
    //   text: 'my dog is so beatfull',
    //   image:
    //     'https://c8.alamy.com/comp/BHKD90/belgian-shepherd-dog-malinois-canis-lupus-familiaris-pup-sitting-in-BHKD90.jpg',
    //   likes: 5,
    //   tags: ['dog', 'malinos', 'any'],
    //   owner: this.userId,
    // };
    // this.postService.createPost(body).subscribe((res) => this.getPosts());
  }
  deletePost(id: any) {
    this.postService.deletePost(id).subscribe(() => this.getPosts());
  }
  EditPost(id: any) {
    this.router.navigate(['post-form', this.userId, id]);

    // const body: UpdatePost = {
    //   text: 'new text update',
    //   image:
    //     'https://images.unsplash.com/photo-1579554600247-7dfe63989cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVsZ2lhbiUyMG1hbGlub2lzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',

    //   likes: 10,
    // };
    // this.postService.updatePost(id, body).subscribe(() => this.getPosts());
  }
}
