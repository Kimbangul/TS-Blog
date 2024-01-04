import { makeAutoObservable, autorun, reaction } from 'mobx';

class blogStore {
  constructor(){
    makeAutoObservable(this);
  }
  // PARAM observable
  blogTitle = 'My Blog'; // 블로그 제목
  nickName = 'user_sample'; // 닉네임
  id = 'sampleUser' // 아이디
  introduction = '' // 한 줄 소개
  profileImg = '' // 프로필 이미지 url 주소
  snsTwitter = '' // 트위터 id
  snsGithub = 'kimbangul' // 깃허브 id
  email = 'highcolor_12@naver.com'

  // FUNCTION action
  setUpdate (attr: AttrType, state: string) {
    this[attr] = state;
    console.log(this[attr]);
  }
}

const store = new blogStore();

// PARAM type
export type AttrType = 'blogTitle'|'nickName'|'id'|'introduction'|'profileImg'|'snsTwitter'|'snsGithub'|'email';


export default store;