import SettingBox from 'components/setting/SettingBox';
import SettingBoxItem, { SettingBoxItemType } from 'components/setting/SettingBoxItem';
import SettingImgItem from 'components/setting/SettingImgItem';
import { useEffect, useState, useRef } from 'react';
import { SettingDataType } from './Setting';


const convertDataState = (stateArr : SettingDataType[]) => {
  let convertedArr : {[key:string]:string} = {};
  stateArr.forEach((el, idx) => {
    convertedArr[el.key] = el.data;
  });
  return convertedArr;
};

const SettingBoxContainer = (props: SettingBoxContainerProps) => {
  const boxRef = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const [boxState, setBoxState] = useState(convertDataState(props.list));

  const updateBoxState = (key:string, value: string) => {
    setBoxState({...boxState, key: value});
  }

  useEffect(()=>{
    console.log(props.list);
    console.log(boxState);
  }, [isEdit, boxState]);
  

  // FUNCTION 저장 처리
  const onClickSave = () => {
  }

  return (
    <SettingBox title={props.title} isEdit={isEdit} onClickEditBtn={setIsEdit.bind(this, !isEdit)}>
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
  list: { cate: string; data: string; isEditable: boolean, key: string }[];
  img?: { cate: string; data: string; isEditable: boolean, key: string }[];
};

export type SettingBoxItemProps = {
  cate: string;
  data: string;
  keyData: string;
  isEdit: boolean;
  updateBoxState: (key:string,value:string) => void;
}

export default SettingBoxContainer;
