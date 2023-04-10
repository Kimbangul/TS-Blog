import { CSSProperties } from 'react';

const Skeleton = (props: SkeletonPropsType) => {
  return <div className='Skeleton' style={props.style}></div>;
};

type SkeletonPropsType = {
  style?: CSSProperties;
};

export default Skeleton;
