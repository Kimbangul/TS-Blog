import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';

import AutoHeightImageView from 'components/common/AutoHeightImageView';
import Skeleton from 'components/common/Skeleton';

import SAMPLE01 from 'src/assets/images/sample01.png';
import TWITTER_24 from 'src/assets/icons/common/twitter_24.svg';
import GITHUB_24 from 'src/assets/icons/common/github_24.svg';
import MAIL_24 from 'src/assets/icons/common/mail_24.svg';
import useStore from 'store/useStore';

const Profile = () => {
  return (
    <div className='Profile'>
      <div className='Profile__img'>
        <AutoHeightImageView src={SAMPLE01} alt='프로필 이미지' />
      </div>
      <div className='Profile__info-container'>
        <div className='Profile__name-container'>
          <h1 className='Profile__name'>{useStore.blogStore.nickName}</h1>
          <div className='Profile__id'>@{useStore.blogStore.id}</div>
        </div>
        <p className='Profile__introduce'>{useStore.blogStore.introduction}</p>
        <ul className='Profile__social'>
          {
            useStore.blogStore.snsTwitter &&
            <SocialListItem link={useStore.blogStore.snsTwitter}>
              <TWITTER_24 />
            </SocialListItem>
          }
          {
            useStore.blogStore.snsGithub &&
            <SocialListItem link={`https://github.com/${useStore.blogStore.snsGithub}`}>
            <GITHUB_24 />
          </SocialListItem>
          }
          {
            useStore.blogStore.email &&
            <SocialListItem link={`mailto:${useStore.blogStore.email}`}>
              <MAIL_24 />
            </SocialListItem>
          }
        </ul>
      </div>
    </div>
  );
};

export const ProfileSkeletonView = () => {
  return (
    <div className='Profile'>
      <div className='Profile__img'>
        <Skeleton />
      </div>
      <div className='Profile__info-container'>
        <div className='Profile__name-container'>
          <h1 className='Profile__name'>
            <Skeleton style={{ width: '12.8rem', height: '4.8rem' }} />
          </h1>
          <div className='Profile__id'>
            <Skeleton style={{ width: '12rem', height: '2.6rem' }} />
          </div>
        </div>
        <div className='Profile__introduce'>
          <Skeleton style={{ width: '46.8rem', height: '2.4rem' }} />
          <Skeleton style={{ width: '32rem', height: '2.4rem', marginTop: '0.8rem' }} />
        </div>
        <ul className='Profile__social'>
          {Array.from({ length: 3 }).map((_, idx) => {
            return (
              <li key={`social${idx}`}>
                <Skeleton style={{ width: '2.4rem', height: '2.4rem' }} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const SocialListItem: React.FC<SocialListItemPropsType> = (props) => {
  return (
    <li className='Profile__social-item'>
      <Link href={props.link} target='_blank'>
        {props.children}
      </Link>
    </li>
  );
};
type SocialListItemPropsType = {
  link: string;
  children: ReactNode;
};

export default Profile;
