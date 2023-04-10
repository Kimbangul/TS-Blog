export type SimpleUser = {
  id: number;
  username: string;
  nickname: string;
  profile_image_url: string;
};

export type TimeBaseQuery = {
  created_at: string;
  updated_at?: string;
};

export type UserBaseQuery = {
  id: number;
  user: SimpleUser;
};

export type BlogUpsertArgs = {
  title: string;
};

export type Blog = UserBaseQuery & TimeBaseQuery & BlogUpsertArgs;

export type CategoryUpsertArgs = {
  blog_id: number;
  title: string;
};

export type Category = UserBaseQuery & TimeBaseQuery & CategoryUpsertArgs;

export type ArticleUpsertArgs = {
  blog_id: number;
  category_id: number;

  title: string;
  content: string;

  is_saved: boolean;
};

export type Article = UserBaseQuery & TimeBaseQuery & ArticleUpsertArgs;

export type CommentUpsertArgs = {
  article_id: number;
  parent_comment?: number;
  content: string;
};

export type Comment = UserBaseQuery & TimeBaseQuery & CommentUpsertArgs;
