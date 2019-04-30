// External Dependencies
import { useEffect, useState } from 'react';

export function useResizeWindow(cb) {
  const [windowWidth, setWindowWidth] = useState(0);

  function resizeListener() {
    cb();
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', resizeListener, false);

    return () => {
      window.removeEventListener('resize', resizeListener, false);
    };
  }, []);

  return windowWidth;
}
