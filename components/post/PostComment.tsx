import Button from 'components/common/Button';
import CommentList from 'components/post/CommentList';
import Input from 'components/common/Input';

const PostComment = () => {
  return (
    <section className='PostComment'>
      <div className='PostComment__counter'>
        <span className='PostComment__counter-count'>0</span> Comment
      </div>
      <form className='PostComment__input-container'>
        <Input
          className='PostComment__input--name'
          type='text'
          placeholder='이름'
        />
        <Input
          className='PostComment__input--password'
          type='password'
          placeholder='비밀번호'
        />
        <textarea className='PostComment__textarea' />
      </form>
      <Button className='PostComment__submit-button'>댓글 작성</Button>
      <CommentList />
    </section>
  );
};

export default PostComment;
