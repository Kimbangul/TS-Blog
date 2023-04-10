import { useEffect } from 'react';

const useInitialStyle = () => {
  useEffect(() => {
    const html = document.querySelector('html');

    if (!(html instanceof HTMLElement)) return;
    html.style.transition = 'font-size 0.3s';
  }, []);
};

export default useInitialStyle;
