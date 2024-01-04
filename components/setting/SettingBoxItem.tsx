import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { SettingBoxItemProps } from 'components/setting/SettingBoxContainer';
import { AttrType } from 'store/blogStore';

const SettingBoxItem = (props: SettingBoxItemType) => {
  const onChangeValue = (key:AttrType, value: string) => {
    props.updateBoxState(key, value);
  }
  return (
    <li className='SettingBoxItem'>
      <div className='SettingBoxItem__cate'>{props.cate}</div>
      {!props.isEdit ? 
        <div className='SettingBoxItem__data'>{props.data}</div> : 
        <Input type='text' value={props.data} maxLength={props.maxlength} onChange={(e)=>onChangeValue(props.keyData, e.currentTarget.value)}/>
      }
    </li>
  );
};

export type SettingBoxItemType = SettingBoxItemProps & {
  maxlength?: number;
};

export default SettingBoxItem;
