import SettingBox from 'components/setting/SettingBox';
import SettingBoxItem, { SettingBoxItemType } from 'components/setting/SettingBoxItem';
import SettingImgItem from 'components/setting/SettingImgItem';
import { useState } from 'react';

const SettingBoxContainer = (props: SettingBoxContainerProps) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <SettingBox title={props.title} isEdit={isEdit} onClickEditBtn={setIsEdit.bind(this, !isEdit)}>
      {props.list.map((el) => {
        return <SettingBoxItem key={el.cate} cate={el.cate} data={el.data} isEdit={isEdit ? el.isEditable : false} />;
      })}
      {props.img?.map((el) => {
        return <SettingImgItem key={el.cate} cate={el.cate} data={el.data} isEdit={isEdit ? el.isEditable : false} />;
      })}
    </SettingBox>
  );
};

export type SettingBoxContainerProps = {
  title: string;
  list: { cate: string; data: string; isEditable: boolean }[];
  img?: { cate: string; data: string; isEditable: boolean }[];
};

export default SettingBoxContainer;
