import dynamic from 'next/dynamic';

const PostViewer = dynamic(() => import('components/common/TuiViewer'), {
  ssr: false,
});

import Profile from 'components/common/Profile';
import PostInfo from 'components/post/PostInfo';
import PostNavigation from 'components/post/PostNavigation';
import PostComment from 'components/post/PostComment';

const Post = () => {
  // const postTagList = [
  //   { name: '고양이', hash: true },
  //   { name: '발바닥', hash: true },
  //   { name: '김방울', hash: true },
  //   { name: '코딩', hash: true },
  // ];

  const dummyContent = `
  <h1>더미 텍스트</h1>
  <p>더미 콘텐츠 내용입니다.</p>
  <h2>제목 태그</h2>
  <h3>제목 태그 3</h3>
  <ul>
  <li>리스트</li>
  <li>리스트</li>
  <li>리스트</li> 
  </ul>
  <a href='#'>링크 태그</a>
  <blockquote>인용문</blockquote>
  <em>이탤릭</em>
  <del>del</del>
  <code>const a = bangul</code>
  `;

  return (
    <section className='Post'>
      <PostInfo />
      <section className='Post__content'>
        <PostViewer content={dummyContent} />
      </section>
      <Profile />
      <PostNavigation />
      <PostComment />
    </section>
  );
};

export default Post;
