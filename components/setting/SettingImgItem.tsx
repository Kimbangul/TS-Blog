import Image from 'next/image';
import { SettingBoxItemProps } from 'components/setting/SettingBoxContainer';
import useStore from 'store/useStore';
import SAMPLE01 from 'src/assets/images/sample01.png';
import { AttrType } from 'store/blogStore';
import validateFileType from 'src/utils/validateFileType';

const SettingImgItem = (props: SettingImgItemType) => {
  const onChangeValue = (key:AttrType, value: string) => {
    // props.updateBoxState(key, value);
    console.log('img');
    props.updateBoxState(key, value);
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
              {props.isEdit && <button className='SettingBoxItem__img-delete'>이미지 업로드</button>}
            </>
          }
        </div>
        <input type="file" 
          className='SettingBoxItem__img-file' 
          id='imgUploadInput'
          accept="image/*"
         onChange={(e)=>{validateFileType(e.target.value, ()=>{console.log(e.target.value)})}}
         />
      </div>
    </li>
  );
};

export default SettingImgItem;

export type SettingImgItemType = SettingBoxItemProps & {
};
