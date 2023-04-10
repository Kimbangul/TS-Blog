import ArticleList from 'components/common/Article';

const CategoryPagePage = () => {
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
      link: '/farrar/post/1',
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

  return (
    <>
      <section className='CategoryPage'>
        <h1 className='CategoryPage__title'>카테고리 이름</h1>
        <ArticleList className='CategoryPage__ArticleList' list={articleList} />
      </section>
    </>
  );
};

export default CategoryPagePage;
