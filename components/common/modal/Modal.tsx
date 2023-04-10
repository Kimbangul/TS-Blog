import { useEffect, MouseEvent, ReactNode } from 'react';
import CLOSE_24 from 'src/assets/icons/common/close_24.svg';

const Modal = (props: ModalProps) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, []);

  const onClickOutModal = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (e.target === e.currentTarget) {
      props.setClose();
    }
    return;
  };
  return (
    <div className='Modal' onClick={onClickOutModal}>
      <div className='Modal__inner'>
        <div className='Modal__close-container'>
          <CLOSE_24 className='Modal__close-btn' onClick={props.setClose} />
        </div>
        {props.children}
      </div>
    </div>
  );
};
// PARAM type
type ModalProps = {
  children: ReactNode;
  setClose: () => void;
};

export default Modal;
