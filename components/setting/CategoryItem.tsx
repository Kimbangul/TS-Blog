import { useState } from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';

const CategoryItem = (props: SettingBoxButtonType) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {!isEdit ? (
        <li className='SettingBoxItem'>
          <div className='SettingBoxItem__cate'>{props.cate}</div>
          <div className='SettingBoxItem__button-container'>
            <Button className='SettingBoxItem__button' onClick={setIsEdit.bind(this, !isEdit)}>
              수정
            </Button>
            <Button className='SettingBoxItem__button--delete' onClick={setIsEdit.bind(this, !isEdit)}>
              삭제
            </Button>
          </div>
        </li>
      ) : (
        <li className='SettingBoxItem'>
          <div className='SettingBoxItem__cate'>
            <Input type='text' value={props.data} />
          </div>
          <div className='SettingBoxItem__button-container'>
            <Button className='SettingBoxItem__button' onClick={setIsEdit.bind(this, !isEdit)}>
              수정 완료
            </Button>
            <Button className='SettingBoxItem__button--delete' onClick={setIsEdit.bind(this, !isEdit)}>
              취소
            </Button>
          </div>
        </li>
      )}
    </>
  );
};

export type SettingBoxButtonType = {
  cate: string;
  data: string;
  button?: boolean;
  buttonText?: string;
  buttonAction?: () => unknown;
};

export default CategoryItem;
