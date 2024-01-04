import Image from 'next/image';
import { SettingBoxItemProps } from 'components/setting/SettingBoxContainer';
import SAMPLE01 from 'src/assets/images/sample01.png';

const SettingImgItem = (props: SettingImgItemType) => {
  return (
    <li className='SettingBoxItem'>
      <div className='SettingBoxItem__cate--top'>{props.cate}</div>
      <div className='SettingBoxItem__img-data'>
        <div className='SettingBoxItem__img'>
          <Image src={SAMPLE01} alt='프로필 이미지' />
          {props.isEdit && <button className='SettingBoxItem__img-delete'>이미지 삭제</button>}
        </div>
      </div>
    </li>
  );
};

export default SettingImgItem;

export type SettingImgItemType = SettingBoxItemProps & {
};
