import { LegacyRef, MutableRefObject, ReactNode } from 'react';
import Button from 'components/common/Button';

const SettingBox = (props: SettingBoxType) => {
  return (
    <div className='SettingBox'>
      <div className='SettingBox__title-container'>
        <h2 className='SettingBox__title'>{props.title}</h2>
        {props.onClickEditBtn && !props.isEdit && (
          <button className='SettingBox__edit-btn' onClick={props.onClickEditBtn}>
            변경하기
          </button>
        )}
      </div>
      <ul className='SettingBox__content'>{props.children}</ul>
      {props.isEdit && (
        <div className='SettingBox__button-container'>
          <Button className='SettingBox__button--cancel' onClick={props.onClickEditBtn}>
            수정 취소
          </Button>
          <Button className='SettingBox__button' onClick={props.onClickEditBtn}>
            수정 완료
          </Button>
        </div>
      )}
    </div>
  );
};

type SettingBoxType = {
  title: string;
  children: JSX.Element | ReactNode | null;
  isEdit: boolean;
  onClickEditBtn?: () => void;  
};

export default SettingBox;
