import Link from 'next/link';
import { observer } from 'mobx-react';
import useStore from 'store/useStore';

import Button from 'components/common/Button';
import TagList from 'components/common/TagList';
import COMMENT_24 from 'src/assets/icons/common/comment_24.svg';

const PostInfo = () => {
  const postTagList = [
    { name: '고양이', hash: true },
    { name: '발바닥', hash: true },
    { name: '김방울', hash: true },
    { name: '코딩', hash: true },
  ];
  return (
    <div className='PostInfo'>
      <h2 className='PostInfo__cate'>
        <Link href='#'>샌드링 개발노트</Link>
      </h2>
      <div className='PostInfo__title-container'>
        <h1 className='PostInfo__title'>방울이 발바닥으로 코딩하기</h1>
        <div className='PostInfo__comment-number'>
          <COMMENT_24 /> 0
        </div>
      </div>
      <dl className='PostInfo__time'>
        <dd className='PostInfo__time-cate'>작성</dd>
        <dt className='PostInfo__time-item'>2022-10-01 19:09:33</dt>
        <br className='mb' />
        <dd className='PostInfo__time-cate'>수정</dd>
        <dt className='PostInfo__time-item'>2022-10-01 19:09:33</dt>
      </dl>
      <TagList className='PostInfo__TagList' list={postTagList} />
      {useStore.headerStore.isLogin && (
        <div className='PostInfo__controller'>
          <Button className='PostInfo__controller-button'>수정</Button>
          <Button className='PostInfo__controller-button--delete'>삭제</Button>
        </div>
      )}
    </div>
  );
};

export default observer(PostInfo);
