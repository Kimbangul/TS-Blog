import SettingBox from 'components/setting/SettingBox';
import SettingBoxItem, { SettingBoxItemType } from 'components/setting/SettingBoxItem';
import SettingImgItem from 'components/setting/SettingImgItem';
import { useEffect, useState, useRef } from 'react';
import { SettingDataType } from 'components/setting/Setting';
import useStore from 'store/useStore';
import { AttrType, blogStoreType, isTypeAttr } from 'store/blogStore';


const convertDataState = (stateArr : SettingDataType[]) => {
  let convertedArr : blogStoreType = {};
  stateArr.forEach((el, idx) => {
    convertedArr[el.key] = el.data;
  });
  return convertedArr;
};

const SettingBoxContainer = (props: SettingBoxContainerProps) => {
  const boxRef = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const [boxState, setBoxState] = useState<blogStoreType>(convertDataState(props.list));

  const updateBoxState = (key:AttrType, value: string) => {

    setBoxState({...boxState, [key]: value});
  }

  useEffect(()=>{
    console.log(props.list);
    console.log(boxState);
  }, [isEdit, boxState]);
  

  // FUNCTION 저장 처리
  const onClickSave = () => {
    for (let key in boxState) {
     if(!isTypeAttr(key) || typeof boxState[key] !== 'string') return;    
      useStore.blogStore.setUpdate(key, boxState[key] || '');
    }

    setIsEdit(false);
    if(props.onUpdate) props.onUpdate();
  }

  return (
    <SettingBox title={props.title} isEdit={isEdit} onClickEditBtn={setIsEdit.bind(this, !isEdit)} onClickSaveBtn={onClickSave}>
      {props.list.map((el) => {
        return <SettingBoxItem key={el.cate} cate={el.cate} data={el.data} keyData={el.key} isEdit={isEdit ? el.isEditable : false} updateBoxState={updateBoxState}/>;
      })}
      {props.img?.map((el) => {
        return <SettingImgItem key={el.cate} cate={el.cate} data={el.data} isEdit={isEdit ? el.isEditable : false} keyData={el.key} updateBoxState={updateBoxState}/>;
      })}
    </SettingBox>
  );
};

export type SettingBoxContainerProps = {
  title: string;
  list: { cate: string; data: string; isEditable: boolean, key: AttrType }[];
  img?: { cate: string; data: string; isEditable: boolean, key: AttrType }[];
  onUpdate?: ()=>void
};

export type SettingBoxItemProps = {
  cate: string;
  data: string;
  keyData: AttrType;
  isEdit: boolean;
  updateBoxState: (key:AttrType,value:string) => void;
}

export default SettingBoxContainer;
