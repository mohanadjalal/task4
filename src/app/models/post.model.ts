import { userPreview } from './user.model';
export interface CreatePost {
  text: string;
  image: string;
  likes: number;
  tags: Array<string>;
  owner: string;
}

export interface PostPreview {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: Array<string>;
  publishDate: string;
  owner: userPreview;
}

export interface UpdatePost {
  text: string;
  image: string;
  likes: number;
}

// Post data returned by id.
export interface Post extends UpdatePost {
  owner: userPreview;
}
