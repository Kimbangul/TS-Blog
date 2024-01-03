import Input from 'components/common/Input';
import Button from 'components/common/Button';
import ArticleList from 'components/common/Article';

import SEARCH_24 from 'src/assets/icons/common/search_24.svg';
import moment from 'moment';

const SearchView = () => {
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
      regDate: moment().format('YYYY-MM-DD')
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
      regDate: moment().format('YYYY-MM-DD')
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
      regDate: moment().format('YYYY-MM-DD')
    },
  ];

  return (
    <section className='Search'>
      <h1 className='Search__title'>검색</h1>
      <div className='Search__box'>
        <Input className='Search__box-input' type='text' placeholder='검색할 키워드를 입력해주세요.' />
        <Button className='Search__box-button'>
          <SEARCH_24 />
        </Button>
      </div>
      <div className='Search__result'>
        <h2 className='Search__subtitle'>검색 결과</h2>
        <ArticleList className='Search__ArticleList' list={articleList} />
      </div>
    </section>
  );
};

export default SearchView;
