import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  PostPreview,
  Post,
  CreatePost,
  UpdatePost,
} from '../models/post.model';
import { List } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseUrl = 'https://dummyapi.io/data/v1';

  options = {
    headers: new HttpHeaders().set('app-id', '62b9514ce20e2d5c6edfc3d8'),
  };
  constructor(private http: HttpClient) {}

  createPost(body: any): Observable<Post> {
    const url = this.baseUrl + '/post/create';
    return this.http.post<Post>(url, body, this.options);
  }

  getListByUser(id: any): Observable<List<PostPreview>> {
    const url = this.baseUrl + `/user/${id}/post`;
    return this.http.get<List<PostPreview>>(url, this.options);
  }

  updatePost(id: any, body: any): Observable<PostPreview> {
    const url = this.baseUrl + `/post/${id}`;
    return this.http.put<PostPreview>(url, body, this.options);
  }

  deletePost(id: any): Observable<string> {
    const url = this.baseUrl + `/post/${id}`;
    return this.http.delete<string>(url, this.options);
  }

  getPost(id: any): Observable<PostPreview> {
    const url = this.baseUrl + `/post/${id}`;
    return this.http.get<PostPreview>(url, this.options);
  }
}
