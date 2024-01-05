import Image from 'next/image';
import { SettingBoxItemProps } from 'components/setting/SettingBoxContainer';
import SAMPLE01 from 'src/assets/images/sample01.png';

const SettingImgItem = (props: SettingImgItemType) => {
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
      </div>
    </li>
  );
};

export default SettingImgItem;

export type SettingImgItemType = SettingBoxItemProps & {
};
