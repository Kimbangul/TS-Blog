import Input from 'components/common/Input';
import Button from 'components/common/Button';

const SettingBoxItem = (props: SettingBoxItemType) => {
  return (
    <li className='SettingBoxItem'>
      <div className='SettingBoxItem__cate'>{props.cate}</div>
      {!props.isEdit ? <div className='SettingBoxItem__data'>{props.data}</div> : <Input type='text' value={props.data} />}
    </li>
  );
};

export type SettingBoxItemType = {
  cate: string;
  data: string;
  isEdit: boolean;
};

export default SettingBoxItem;
