import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { SettingBoxItemProps } from 'components/setting/SettingBoxContainer';

const SettingBoxItem = (props: SettingBoxItemType) => {
  return (
    <li className='SettingBoxItem'>
      <div className='SettingBoxItem__cate'>{props.cate}</div>
      {!props.isEdit ? <div className='SettingBoxItem__data'>{props.data}</div> : <Input type='text' value={props.data} maxLength={props.maxlength}/>}
    </li>
  );
};

export type SettingBoxItemType = SettingBoxItemProps & {
  maxlength?: number;
};

export default SettingBoxItem;
