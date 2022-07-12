import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormArray,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { userPreview } from 'src/app/models/user.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import {
  PostPreview,
  Post,
  CreatePost,
  UpdatePost,
} from '../../models/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  userId: any;
  postId: any;
  user: any;
  tagValue: string = '';
  errors = '';

  postForm = this.fb.group({
    text: [
      '',
      [Validators.required, Validators.minLength(6), Validators.max(60)],
    ],
    image: ['', [Validators.required]],
    likes: ['0', [Validators.min(0)]],
    owner: [''],
    tags: this.fb.array([]),
  });

  text = this.postForm.get('text');
  image = this.postForm.get('image');
  likes = this.postForm.get('likes');
  owner = this.postForm.get('owner');
  tags = this.getTags();

  constructor(
    private postService: PostService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.postId = params.get('pId');
      this.userId = params.get('uId');
      this.userService.getUserById(this.userId).subscribe((res) => {
        this.user = res;
        this.owner?.setValue(res.firstName);
      });
    });
  }

  ngOnInit(): void {
    this.owner?.disable();

    if (this.postId)
      this.postService.getPost(this.postId).subscribe((res) => {
        const { text, image, likes, owner, tags } = res;
        for (const tag of tags) {
          this.tags.push(new FormControl(tag));
        }
        this.postForm.patchValue({
          text,
          image,
          likes: likes.toString(),
          owner: owner.firstName,
        });
      });
  }
  ngOnChanges(): void {}
  onSubmit(): void {
    if (this.postForm.valid) {
      if (this.postId) {
        this.postService
          .updatePost(this.postId, this.postForm.value)
          .subscribe((res) => console.log(res));
      } else {
        const body: CreatePost = {
          text: this.text?.value,
          image: this.image?.value,
          tags: this.tags?.value,
          owner: this.userId,
          likes: this.likes?.value,
        };
        this.postService.createPost(body).subscribe((res) => console.log(res));
      }
    } else this.errors = 'Invalid Information! \nCheck the form inputs';
  }

  addTag(tag: any) {
    this.getTags().push(new FormControl(tag.value));
    tag.value = '';
    this.tagValue = '';
  }
  deleteTag(index: any) {
    this.getTags().removeAt(index);
  }
  getTags() {
    return this.postForm.get('tags') as FormArray;
  }
}
