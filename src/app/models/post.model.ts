import { userPreview } from './user.model';
export interface CreatePost {
  text: string | undefined | null;
  image: string | undefined | null;
  likes: string | undefined | null;
  tags: Array<string> | undefined | null;
  owner: string | undefined | null;
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
