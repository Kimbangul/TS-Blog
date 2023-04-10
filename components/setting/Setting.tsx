import { useReducer } from 'react';
import SettingBoxContainer from 'components/setting/SettingBoxContainer';
import SettingCategoryContainer from 'components/setting/SettingCategoryContainer';

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

  // PARAM 임시 설정 변수
  const defaultSetting = [
    { cate: '블로그 제목', data: 'sandring@sandring.com', isEditable: true },
    { cate: '닉네임', data: 'sandring@sandring.com', isEditable: true },
    { cate: '아이디', data: 'sandring@sandring.com', isEditable: false },
    { cate: '한줄소개', data: 'sandring@sandring.com', isEditable: true },
  ];
  const profileImg = [{ cate: '프로필 이미지', data: 'sandring@sandring.com', isEditable: true }];
  const snsSetting = [
    { cate: 'Twitter', data: '@Sandring', isEditable: true },
    { cate: 'Github', data: '@Sandring', isEditable: true },
    { cate: 'Email', data: 'sandring@sandring.com', isEditable: true },
  ];
  const cateSetting = [
    { cate: 'Twitter', data: '@Sandring', isEditable: true },
    { cate: 'Github', data: '@Sandring', isEditable: true },
    { cate: 'Email', data: 'sandring@sandring.com', isEditable: true },
  ];

  return (
    <section className='Setting'>
      <h1 className='Setting__title'>설정</h1>
      <div className='Setting__content'>
        <SettingBoxContainer title='기본 설정' list={defaultSetting} img={profileImg} />
        <SettingBoxContainer title='SNS 설정' list={snsSetting} />
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

export default Setting;
