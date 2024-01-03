import Link from 'next/link';
import { Observer, observer } from 'mobx-react';
import useStore from 'store/useStore';
import React, { MouseEvent, useRef, useReducer, useEffect } from 'react';
import { Router, useRouter } from 'next/router';

import { useResize } from 'src/hooks/useResize';
import Button from 'components/common/Button';
import Category from 'components/common/Category';
import Modal from 'components/common/modal/Modal';
import Login from 'components/common/modal/Login';
import Join from 'components/common/modal/Join';
import { SidebarMenu } from 'components/common/layout/Sidebar';

import SUN_24 from 'src/assets/icons/common/sun_24.svg';
import CLOSE_24 from 'src/assets/icons/common/close_24.svg';
import { Accounts, EmailLoginParam } from 'src/api';
import { AxiosError } from 'axios';

const emailLoginFailHandler = (e: number) => {
  switch (e || 400) {
    case 400:
      return '이메일을 발신한 지 3분이 지나지 않았습니다.';
    case 409:
      return '오류가 발생했습니다. 서버 관리자에게 문의해 주세요.';
    default:
      return '오류가 발생했습니다. 서버 관리자에게 문의해 주세요.';
  }
};

const onEmailLogin = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const email = formData.get('email');

  if (!(typeof email == 'string')) return;
  // Accounts.SignInEmail({
  //   email: email,
  //   callback: process.env.NEXT_PUBLIC_LOGIN_CALLBACK_URL || '',
  //   scheme: 'http',
  //   url: 'localhost:3000',
  // })
  //   .then((e) => {
  //     if (e.status !== 200) {
  //       alert(emailLoginFailHandler(e.status));
  //       return;
  //     }
  //     alert('인증 이메일을 발송했습니다. \n입력한 메일 주소에서 인증을 완료해 주세요.');
  //     return;
  //   })
  //   .catch((e) => {
  //     alert(emailLoginFailHandler(e));
  //   });
  useStore.headerStore.setIsLogin(true);
  localStorage.setItem('access', 'test access'); 
  location.reload();
};

// COMPONENT main component
const Header: React.FC = () => {
  // PARAM size 관련
  const size = useResize();
  const sidebarRef = useRef(null);
  const router = useRouter();

  useEffect(()=>{
      console.log(router.asPath);
      useStore.headerStore.setIsCloseSidebar();
  },[router.asPath]);

  // PARAM state
  const modalReducer = (state: modalStateType, action: modalPayloadType): modalStateType => {
    switch (action.type) {
      case ModalAction.OPEN:
        return { isOpen: true, content: action.payload };
      case ModalAction.CLOSE:
        return { isOpen: false, content: null };
      case ModalAction.SET_CONTENT:
        return { ...state, content: action.payload };
      default:
        return { ...state };
    }
  };
  const [modal, setModal] = useReducer(modalReducer, {
    isOpen: false,
    content: null,
  });

  // FUNCTION
  const onClickOpenBtn = () => {
    useStore.headerStore.setIsOpenSidebar();
    return;
  };

  const onClickCloseBtn = () => {
    useStore.headerStore.setIsCloseSidebar();
  }

  const onClickSideBar = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClickCloseBtn();
    }
    return;
  };

  const getIsSidebarClassName = () => {
    if (useStore.headerStore.isOpenSidebar) {
      return 'Header__sidebar';
    } else {
      return 'Header__sidebar--close';
    }
  };

  const setIsOpenLoginModal = () => {
    setModal({
      type: ModalAction.OPEN,
      payload: (
        <Login
          onEmailLogin={onEmailLogin}
          onClickBtn={setModal.bind(this, {
            type: ModalAction.SET_CONTENT,
            payload: <Join onEmailLogin={onEmailLogin} />,
          })}
        />
      ),
    });
    return;
  };

  const onClickLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('bangul_coo_key');
    alert('로그아웃 되었습니다.');
    router.reload();
    return;
  };

  /** FUNCTION 로그인 상태 검증 */
  useEffect(() => {
    const access = localStorage.getItem('access');
    console.log(access);
    if (!access) {
      useStore.headerStore.setIsLogin(false);
      return;
    }
    useStore.headerStore.setIsLogin(true);
  }, []);

  return (
    <>
      <header className='Header'>
        <div className='Header__inner'>
          <div className='Header__title'>
            <Link href='/'>SANDRING Blog</Link>
          </div>
          <div className='Header__button-container'>
            <LoginButton setIsOpenLogin={setIsOpenLoginModal} isLogin={useStore.headerStore.isLogin} onClickLogout={onClickLogout} />
            <DarkModeButton />
          </div>
          <button className='Header__menu-button' onClick={onClickOpenBtn}>
            <span className='Header__menu-bar'></span>
            <span className='Header__menu-bar'></span>
            <span className='Header__menu-bar'></span>
          </button>
        </div>
        {/* COMPONENT header sidebar */}
        <div className={getIsSidebarClassName()} ref={sidebarRef} onClick={onClickSideBar}>
          <div className='Header__sidebar-inner' style={useStore.headerStore.sidebarAnimation}>
            <div className='Header__sidebar-close-container'>
              <CLOSE_24 className='Header__sidebar-close-btn' onClick={onClickCloseBtn} />
            </div>
            <nav className='Header__sidebar-menu'>
              <Category />
              <SidebarMenu />
              <LoginButton setIsOpenLogin={setIsOpenLoginModal} isLogin={useStore.headerStore.isLogin} onClickLogout={onClickLogout} />
              <DarkModeButton />
            </nav>
          </div>
        </div>
      </header>
      {modal.isOpen && <Modal setClose={setModal.bind(this, { type: ModalAction.CLOSE })}>{modal.content}</Modal>}
    </>
  );
};

// COMPONENT button
const LoginButton: React.FC<LoginType> = (props) => {
  return (
    <Observer>
      {() => (
        <>
          {!props.isLogin ? (
            <Button className='Header__button-login' onClick={props.setIsOpenLogin.bind(this, true)}>
              Login
            </Button>
          ) : (
            <Button className='Header__button-login' onClick={props.onClickLogout}>
              Logout
            </Button>
          )}
        </>
      )}
    </Observer>
  );
};

const DarkModeButton: React.FC = () => {
  const onClickDarkModeBtn = () => useStore.headerStore.setIsDarkMode(!useStore.headerStore.isDarkMode);
  return (
    <Button className='Header__button-darkmode' onClick={onClickDarkModeBtn}>
      <SUN_24 />
    </Button>
  );
};

// PARAM button type
type LoginType = {
  isLogin: boolean;
  onClickLogout: () => void;
  setIsOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

// PARAM modal type
enum ModalAction {
  CLOSE = 'CLOSE',
  OPEN = 'OPEN',
  SET_CONTENT = 'SET_CONTENT',
}
type modalStateType = {
  isOpen?: boolean;
  content?: JSX.Element | null;
};
type modalPayloadType = {
  type: ModalAction;
  payload?: JSX.Element;
};

export default observer(Header);
