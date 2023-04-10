import { CRUDApiGenerator, QueryBase } from '../general';
import { Article, ArticleUpsertArgs, Blog, BlogUpsertArgs, Category, CategoryUpsertArgs, Comment, CommentUpsertArgs } from './types';

export * from './types';

class RecommendExtendedApiGenerator<T extends QueryBase, U = {}> extends CRUDApiGenerator<T, U> {
  getRecommndedItems = () => {
    const endpoint = this.makeUrl('/recommend/');
    return this.client.get(endpoint);
  };
}

export const BlogAPI = new CRUDApiGenerator<Blog, BlogUpsertArgs>('/blogs');
export const CategoryAPI = new CRUDApiGenerator<Category, CategoryUpsertArgs>('/categories');
export const ArticleAPI = new RecommendExtendedApiGenerator<Article, ArticleUpsertArgs>('/articles');
export const CommentAPI = new CRUDApiGenerator<Comment, CommentUpsertArgs>('/comments');

`
1. 회원 가입을 하고 로그인을 했어
BlogApi.getMyItems() =>
  1. 결과가 없으면 BlogApi.postitem을 할 수 있는 페이지로 이동
  2. 결과가 있으면 /{Blog.title} 페이지로 이동

/{Blog.title} 페이지로 이동하면

BlogApi.getFlatItem({ 'title':Blog.Title }) => {next:null,prev:null,results:[]}

CategoryAPI.getFlatItems({
  blog_id:머시깽이
})



`;
