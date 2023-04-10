import dynamic from 'next/dynamic';
import Button from 'components/common/Button';
import { useRouter } from 'next/router';

const PostEditor = dynamic(() => import('components/common/TuiEditor'), {
  ssr: false,
});

const PostWrite = () => {
  const router = useRouter();
  return (
    <>
      <section className='PostWrite'>
        <div className='PostWrite__info'>
          <select className='PostWrite__cate'>
            <option value='none'>카테고리를 선택해주세요.</option>
            <option value='test'>방울이 발바닥</option>
            <option value='test2'>밥울이 꼬리</option>
          </select>
          <div className='PostWrite__title-container'>
            <label className='PostWrite__title-label' htmlFor='title'>
              포스트 제목
            </label>
            <input
              type='text'
              name='title'
              className='PostWrite__title'
              placeholder='제목을 입력해주세요.'
            />
            <label className='PostWrite__title-label' htmlFor='tag'>
              태그
            </label>
            <input
              className='PostWrite__tag'
              name='tag'
              type='text'
              placeholder='태그를 입력해주세요.'
            />
          </div>
        </div>
        <div className='PostWrite__contents'>
          <PostEditor placeholder='내용을 입력해주세요.' />
        </div>

        <div className='PostWrite__button-container'>
          <Button
            className='PostWrite__button--cancel'
            onClick={() => router.back()}
          >
            작성 취소하기
          </Button>
          <Button className='PostWrite__button'>작성하기</Button>
        </div>
      </section>
    </>
  );
};

export default PostWrite;
