import { useState } from 'react';
import SettingBox from 'components/setting/SettingBox';
import { SettingBoxContainerProps } from 'components/setting/SettingBoxContainer';
import CategoryItem from 'components/setting/CategoryItem';
import Button from 'components/common/Button';

const SettingCategoryContainer = (props: SettingCategoryContainerProps) => {
  return (
    <SettingBox title={props.title} isEdit={false}>
      {props.list.map((el) => {
        return <CategoryItem key={el.cate} cate={el.cate} data={el.data} />;
      })}
      <div className='SettingBox__button-container'>
      <Button className='SettingBox__button'>+ 카테고리 추가</Button>
      </div>
    </SettingBox>
  );
};

// export type SettingCategoryContainerProps = SettingBoxContainerProps & {
//   list: { cate: string; data: string; isEditable: boolean, key: string }[];
// }
export type SettingCategoryContainerProps =  {
  title: string;
  list: { cate: string; data: string; isEditable: boolean, key: string }[];
  img?: { cate: string; data: string; isEditable: boolean, key: string }[];
}

export default SettingCategoryContainer;
