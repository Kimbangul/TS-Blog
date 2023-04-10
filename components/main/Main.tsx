import axios from 'src/axios';

import Profile, { ProfileSkeletonView } from 'components/common/Profile';
import TagList, { TagListSkeletonView } from 'components/common/TagList';
import ArticleList, { ArticleListSkeletonView } from 'components/common/Article';
import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { useQueries, useQuery } from 'react-query';

const Main = () => {
  type Post = {
    date: string;
    headline: string;
    href: string;
    context?: string;
    tags?: string;
  };

  const { isLoading, data, error, refetch, isIdle } = useQuery(
    'postList',
    async () => {
      const res = await axios.get('https://api.honeycombpizza.link/velog/kimbangul');
      console.log(res.data);
      return res.data;
    }
    // {
    //   enabled: false,
    // }
  );

  const postTagList = [
    { name: '전체보기', link: '#' },
    { name: 'JavaScript', number: 10, hash: true, link: '#' },
    { name: 'Python', number: 25, hash: true, link: '#' },
    { name: 'Python', number: 3, hash: true, link: '#' },
    { name: 'JavaScript', number: 10, hash: true, link: '#' },
    { name: 'Python', number: 25, hash: true, link: '#' },
    { name: 'Python', number: 3, hash: true, link: '#' },
    { name: 'JavaScript', number: 10, hash: true, link: '#' },
    { name: 'Python', number: 25, hash: true, link: '#' },
    { name: 'Python', number: 3, hash: true, link: '#' },
    { name: 'JavaScript', number: 10, hash: true, link: '#' },
    { name: 'Python', number: 25, hash: true, link: '#' },
    { name: 'Python', number: 3, hash: true, link: '#' },
  ];
  const articleList = [
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: 'farrar/post/1',
    },
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
    {
      id: 0,
      title: '장고 닌자 파일 리스폰스',
      content: '어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 어쩌고젂쩌고 어쩌고',
      tag: [
        { name: 'Python', hash: true, number: 50 },
        { name: 'Python', hash: true, number: 50 },
      ],
      comment: 0,
      link: '#',
    },
  ];

  type VelogArticle = {
    headline: string;
    href: string;
    date: string;
    tags: string;
    context: string;
  };

  return (
    <>
      {isLoading ? (
        <section className='Main'>
          <ProfileSkeletonView />
          <div className='Main__TagList'>
            <TagListSkeletonView length={3} />
          </div>
          <section className='Main__Article-section'>
            <h2 className='Main__Article-title'>Recent Articles</h2>
            <div className='Main__ArticleList--wrapper'>
              <ArticleListSkeletonView length={5} />
            </div>
          </section>
        </section>
      ) : (
        <section className='Main'>
          <Profile />
          <TagList className='Main__TagList' list={postTagList} />
          <section className='Main__Article-section'>
            <h2 className='Main__Article-title'>Recent Articles</h2>
            <ArticleList className='Main__ArticleList' list={articleList} />
          </section>
        </section>
      )}
    </>
  );
};

export default Main;
