import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreatePost } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { ArrayInput } from 'src/app/shared/arrayInput';
import { BaseControl } from 'src/app/shared/baseControl';
import { InputService } from 'src/app/shared/services/input.service';
import { TextInput } from 'src/app/shared/textInput';

@Component({
  selector: 'app-post-dy-form',
  templateUrl: './post-dy-form.component.html',
  styleUrls: ['./post-dy-form.component.css'],
})
export class PostDyFormComponent implements OnInit {
  inputs: Observable<BaseControl<string>[]>;
  inputsAr = [
    new TextInput({
      key: 'owner',
      label: 'Owner',
      type: 'text',
      disable: true,
      order: 1,
    }),
    new TextInput({
      key: 'text',
      label: 'Text',
      type: 'text',
      required: true,
      order: 2,
      validators: { minLength: 6 },
    }),
    new TextInput({
      key: 'image',
      label: 'Image',
      type: 'text',
      required: true,
      order: 3,
    }),
    new TextInput({
      key: 'likes',
      value: '0',
      label: 'likes',
      type: 'number',
      order: 4,
      validators: { min: 0 },
    }),

    new ArrayInput({
      key: 'tags',
      label: 'Tag',
      type: 'array',
      required: true,
      order: 5,
    }),
  ];
  userId: any;
  postId: any;
  user: any;
  tagValue: string = '';
  errors: any;
  success = '';
  form!: FormGroup;
  constructor(
    private inputService: InputService,
    private postService: PostService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.inputService.setInputs(this.inputsAr);
    this.inputs = inputService.getInputs();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.postId = params.get('pId');
      if (this.postId) {
        this.postService.getPost(this.postId).subscribe((res) => {
          const { text, image, likes, owner, tags } = res;
          const formTags = this.form.get('tags') as FormArray;
          for (const tag of tags) {
            formTags.push(new FormControl(tag));
          }
          this.form.patchValue({
            text,
            image,
            likes: likes.toString(),
            owner: owner.firstName,
          });
        });
      }

      this.userId = params.get('uId');
      this.userService.getUserById(this.userId).subscribe((res) => {
        this.user = res;
        this.form.get('owner')?.setValue(res.firstName);
      });
    });
  }

  onSubmit() {
    this.errors = '';
    this.success = '';

    if (this.form.valid) {
      if (this.postId) {
        this.postService
          .updatePost(this.postId, this.form.value)
          .subscribe((res) => {
            this.success = 'the post updated successfully';
            setTimeout(() => {
              this.backToPosts();
            }, 2000);
          });
      } else {
        const { owner, ...formValues } = this.form.getRawValue();
        const body: CreatePost = { owner: this.userId, ...formValues };

        this.postService.createPost(body).subscribe((res) => {
          this.success = 'the post created successfully';
          setTimeout(() => {
            this.backToPosts();
          }, 2000);
        });
      }
    } else {
      this.form.markAllAsTouched();
      this.errors = 'Invalid Information!  Check the form inputs';
    }
  }

  backToPosts() {
    this.router.navigate([`/user-details/${this.userId}/posts/${this.userId}`]);
  }
}
