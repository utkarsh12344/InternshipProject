import React, { useRef, useEffect } from 'react';

const FullscreenButton = () => {
  const buttonRef = useRef(null);

  const handleFullscreen = () => {
    const elem = document.documentElement;

    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const button = buttonRef.current;
    button.addEventListener('click', handleFullscreen);

    return () => {
      button.removeEventListener('click', handleFullscreen);
    };
  }, []);

  return (
    <button ref={buttonRef} style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
      Toggle Fullscreen
    </button>
  );
};

export default FullscreenButton;
