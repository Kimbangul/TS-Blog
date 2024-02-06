import Image from 'next/image';
import { SettingBoxItemProps } from 'components/setting/SettingBoxContainer';
import { useRef } from 'react';
import useStore from 'store/useStore';
import SAMPLE01 from 'src/assets/images/sample01.png';
import { AttrType } from 'store/blogStore';
import validateFileType from 'src/utils/validateFileType';

const SettingImgItem = (props: SettingImgItemType) => {

  const inputRef = useRef<HTMLInputElement>(null);

  // FUNCTION 부모 컴포넌트의 상태로 저장
  const onChangeValue = (key:AttrType, value: string) => () => {
    console.log('img');
    console.log(value);
    props.updateBoxState(key, value);
  }

  const onClickUpload = (e:React.MouseEvent) => {
    e.preventDefault();
    if(!inputRef.current) return;
    console.log(inputRef.current);
    inputRef.current.click();
  }


  return (
    <li className='SettingBoxItem'>
      <div className='SettingBoxItem__cate--top'>{props.cate}</div>
      <div className='SettingBoxItem__img-data'>
        <div className='SettingBoxItem__img'>
          {props.data ? 
            <>
              <Image src={props.data} alt='프로필 이미지' />
              {props.isEdit && <button className='SettingBoxItem__img-delete'>이미지 삭제</button>}
            </> :
            <>
              <div className='SettingBoxItem__img-noimg'>No image</div>
              {props.isEdit && <button className='SettingBoxItem__img-delete' onClick={onClickUpload}>이미지 업로드</button>}
            </>
          }
        </div>
        <input type="file" 
          className='SettingBoxItem__img-file' 
          id='imgUploadInput'
          accept="image/*"
          ref={inputRef}
          onChange={(e)=>{validateFileType(e.target.value, onChangeValue(props.keyData, e.target.value))}}
         />
      </div>
    </li>
  );
};

export default SettingImgItem;

export type SettingImgItemType = SettingBoxItemProps & {
};
