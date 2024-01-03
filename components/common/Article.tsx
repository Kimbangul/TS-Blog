import Image from 'next/image';
import Link from 'next/link';
import AutoHeightImageView from 'components/common/AutoHeightImageView';
import TagList, { TagPropsType, TagListSkeletonView } from 'components/common/TagList';
import Skeleton from 'components/common/Skeleton';

import SAMPLE01 from 'src/assets/images/sample01.png';

// COMPONENT article List
const ArticleList: React.FC<ArticleListType> = (props) => {
  return (
    <>
      <ul className={props.className ? props.className : 'ArticleList'}>
        {props.list.map((el, idx) => {
          return <Article key={`post${idx}`} {...el} />;
        })}
      </ul>
    </>
  );
};

// COMPONENT 단일 article
export const Article: React.FC<ArticlePropsType> = (props) => {
  return (
    <>
      <li className='Article'>
        <Link href={props.link}>
          <div className='Article__thumb'>
            <Image className='Article__thumb-img' src={SAMPLE01} alt='thumbnail image' />
            {/* <AutoHeightImageView
              src={SAMPLE01}
              alt='thumbnail image'
            /> */}
          </div>
          <div className='Article__title-container'>
            <h3 className='Article__title'>{props.title}</h3>

            <span className='Article__comment'>
              {' '}
              {'['}
              {`${props.comment}`}
              {']'}
            </span>
          </div>
          <p className='Article__content'>{props.content}</p>
          {props.tag && <TagList className='Article__TagList' list={props.tag} />}
          <div className='Article__regDate'> {props.regDate}</div>
        </Link>
      </li>
    </>
  );
};

// COMPONENT skeleton
export const ArticleListSkeletonView = (props: ArticleListSkeletonType) => {
  return (
    <ul className='ArticleList'>
      {Array.from({ length: props.length }).map((_, idx) => {
        return (
          <li className='Article' key={`ArticleSkeleton${idx}`}>
            <div className='Article__thumb'>
              <Skeleton />
            </div>
            <div className='Article__title-container'>
              <Skeleton style={{ width: '20rem', height: '2.4rem' }} />
            </div>
            <div className='Article__content'>
              <Skeleton style={{ width: '24.8rem', height: '1.6rem' }} />
              <Skeleton style={{ width: '20rem', height: '1.6rem', marginTop: '0.8rem' }} />
            </div>
            <div className='Article__TagList'>
              <TagListSkeletonView length={1} />
            </div>            
          </li>
        );
      })}
    </ul>
  );
};

// PARAM type
type ArticleListType = {
  [key: string]: any;
  list: ArticlePropsType[];
};
type ArticlePropsType = {
  id: number;
  title: string;
  content: string;
  tag?: TagPropsType[];
  comment: number;
  link: string;
  regDate: string;
};

type ArticleListSkeletonType = {
  length: number;
};

export default ArticleList;
