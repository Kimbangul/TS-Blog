import Image from 'next/image';
import { SettingBoxItemProps } from 'components/setting/SettingBoxContainer';
import { useEffect, useMemo, useRef, useState } from 'react';
import useStore from 'store/useStore';
import SAMPLE01 from 'src/assets/images/sample01.png';
import { AttrType } from 'store/blogStore';
import validateFileType from 'src/utils/validateFileType';
import { File } from 'src/api';
import axios, { AxiosResponse } from 'axios';

const SettingImgItem = (props: SettingImgItemType) => {
  // const [isImgUploaded, seIsImgUploaded] = useMemo(()=>{},[]);
  const [imgSrc, setImgSrc] = useState(()=>
    props.data.length > 1 ? props.data : ''
 );

  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // FUNCTION 부모 컴포넌트(로컬)의 상태로 저장
  const onChangeValue = (key:AttrType, value: string) => () => {
    console.log('img');
    console.log(value);
    props.updateBoxState(key, value);
    //TODO test
    // const data = File.upload(value);
    // console.log(data);
    if(formRef.current){
      const formData = new FormData();    
      //formData.append();
      console.log(formData);
      // const result: AxiosResponse<{ message: string }> = await axios.post(
      //   "/api/upload",
      //   formData,
      //   {
      //     headers: {
      //       "Contest-Type": "multipart/form-data",
      //     },
      //   }
      // );
    }   
  // // TODO test end
  //  setImgSrc(value);
  }

  // FUNCTION 이미지 업로드
  const onClickUpload = (e:React.MouseEvent) => {
    e.preventDefault();
    if(!inputRef.current) return;
    console.log(inputRef.current);
    inputRef.current.click();
  }




  return (
    <li className='SettingBoxItem'>
      <div className='SettingBoxItem__cate--top'>{props.cate}</div>
      <div className='SettingBoxItem__img-data'>
        <div className='SettingBoxItem__img'>
          {imgSrc ? 
            <>
              <Image src={imgSrc} alt='프로필 이미지' fill/>
              {props.isEdit && <button className='SettingBoxItem__img-delete'>이미지 삭제</button>}
            </> :
            <>
              <div className='SettingBoxItem__img-noimg'>No image</div>
              {props.isEdit && <button className='SettingBoxItem__img-delete' onClick={onClickUpload}>이미지 업로드</button>}
            </>
          }
        </div>
        <form id="imgUploadForm" method="post" action="upload" encType="multipart/form-data" ref={formRef}>
          <input type="file" 
            className='SettingBoxItem__img-file' 
            id='imgUploadInput'
            accept="image/*"
            ref={inputRef}
            onChange={(e)=>{validateFileType(e.target.value, onChangeValue(props.keyData, e.target.value))}}
          />
        </form>
      </div>
    </li>
  );
};

export default SettingImgItem;

export type SettingImgItemType = SettingBoxItemProps & {
};
