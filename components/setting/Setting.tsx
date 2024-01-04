import { useReducer, useState } from 'react';
import SettingBoxContainer from 'components/setting/SettingBoxContainer';
import SettingCategoryContainer from 'components/setting/SettingCategoryContainer';
import useStore from 'store/useStore';
import { AttrType } from 'store/blogStore';


  // PARAM 임시 설정 변수
  const getDefaultSetting : () => SettingDataType[] = () => [
    { cate: '블로그 제목', data: useStore.blogStore.blogTitle, isEditable: true, key:'blogTitle' },
    { cate: '닉네임', data: useStore.blogStore.nickName, isEditable: true, key: 'nickName' },
    { cate: '아이디', data: useStore.blogStore.id, isEditable: false, key: 'id' },
    { cate: '한줄소개', data: useStore.blogStore.email, isEditable: true, key: 'introduction' },
  ];
  const getProfileImg : () => SettingDataType[] = () => [{ cate: '프로필 이미지', data: useStore.blogStore.profileImg, isEditable: true, key: 'profileImg' }];
  const getSnsSetting : () => SettingDataType[] = () => [
    { cate: 'Twitter', data: useStore.blogStore.snsTwitter, isEditable: true, key: 'snsTwitter' },
    { cate: 'Github', data: useStore.blogStore.snsGithub, isEditable: true, key: 'snsGithub' },
    { cate: 'Email', data: useStore.blogStore.email, isEditable: true, key: 'email' },
  ];
  const cateSetting = [
    { cate: 'Twitter', data: '@Sandring', isEditable: true , key:''},
    { cate: 'Github', data: '@Sandring', isEditable: true, key:'' },
    { cate: 'Email', data: 'sandring@sandring.com', isEditable: true, key: '' },
  ];

const Setting = () => {
  
  const editReducer = (state: EditStateType, action: EditActionType): EditStateType => {
    switch (action.type) {
      case 'SET_EDIT':
        if (!action.payload?.cate) return { ...state };
        return { ...state, [action.payload.cate]: true };
      default:
        return { ...state };
    }
  };

  const initialEditState = {
    default: false,
    sns: false,
    cate: false,
  };
  const [editState, setEditState] = useReducer(editReducer, initialEditState);
  const [defaultSetting, setDefaultSetting] = useState(getDefaultSetting());
  const [profileImg, setProfileImg] = useState(getProfileImg());
  const [snsSetting, setSnsSetting] = useState(getSnsSetting());

  const updateData = () => {
    setDefaultSetting(getDefaultSetting());
    setProfileImg(getProfileImg());
    setSnsSetting(getSnsSetting());
  }


  return (
    <section className='Setting'>
      <h1 className='Setting__title'>설정</h1>
      <div className='Setting__content'>
        <SettingBoxContainer title='기본 설정' list={defaultSetting} img={profileImg} onUpdate={()=>{setDefaultSetting(getDefaultSetting());setProfileImg(getProfileImg());}}/>
        <SettingBoxContainer title='SNS 설정' list={snsSetting} onUpdate={()=>{setSnsSetting(getSnsSetting())}}/>
        <SettingCategoryContainer title='카테고리 설정' list={cateSetting} />
      </div>
    </section>
  );
};

type EditActionType = {
  type: string;
  payload?: EditActionPayloadType;
};
type EditActionPayloadType = {
  cate?: string;
};
type EditStateType = {
  [key: string]: boolean;
};

export interface SettingDataType {
  cate: string;
  data: string;
  isEditable: boolean;
  key: AttrType;
}


export default Setting;
