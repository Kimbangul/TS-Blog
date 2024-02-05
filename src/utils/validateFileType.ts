// FUNCTION 파링 업로드 시 유효성 검사
const validateFileType =(fileName: string, callBack:()=>any)=> {
  const idxDot = fileName.lastIndexOf(".") + 1;
  const extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
  console.log(extFile);
  if (extFile==="jpg" || extFile==="jpeg" || extFile==="png"){
      //TO DO
      callBack();
  }else{
      alert("Only jpg/jpeg and png files are allowed!");
  }   
}

export default validateFileType; 