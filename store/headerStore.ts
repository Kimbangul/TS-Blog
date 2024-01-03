import { makeAutoObservable, autorun, reaction } from 'mobx';

export interface headerStoreData {
  isOpenSidebar: boolean;
  isDarkMode: boolean;
  isLogin: boolean;
}

class headerStore {
  constructor() {
    makeAutoObservable(this);
  }
  // PARAM observable
  isOpenSidebar = false;
  isDarkMode = false;
  isLogin = false;

  // FUNCTION action
  setIsOpenSidebar() {
    this.isOpenSidebar = true;
   // this.isOpenSidebar = !this.isOpenSidebar;
    return;
  }
  setIsCloseSidebar(){
    this.isOpenSidebar = false;
  }
  setIsDarkMode(state: boolean) {
    this.isDarkMode = state;
    return;
  }

  setIsLogin(state: boolean) {
    this.isLogin = state;
    return;
  }

  // FUNCTION computed
  get sidebarAnimation() {
    if (this.isOpenSidebar) {
      return { right: '0' };
    }
    return { right: '-40vw' };
  }

  get darkModeClassName() {
    if (!this.isDarkMode) {
      return 'light';
    }
    return 'dark';
  }
}

const store = new headerStore();

// FUNCTION autorun
// FUNCTION 사이드바 닫기
reaction(
  () => store.isOpenSidebar,
  (isOpenSidebar) => {
    if (isOpenSidebar) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }
);

export default store;
