import { QueryBase, ReadOnlyAPIGenerator } from './general';

// PARAM return type
type Post = QueryBase & {};

class PostAPIGenerator extends ReadOnlyAPIGenerator<Post> {
  /** FUNCTION 유저  게시글 가져오는 팡샨*/
  getUserPost() {}
}

const Posts = new PostAPIGenerator('/example');

export default PostAPIGenerator;
