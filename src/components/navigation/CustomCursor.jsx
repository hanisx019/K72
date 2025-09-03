import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '32px',
        height: '32px',
        background: 'rgba(211,253,80,0.8)',
        borderRadius: '50%',
        pointerEvents: 'none',
        transition: 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
        zIndex: 9999,
        mixBlendMode: 'difference'
      }}
    />
  );
};

export default CustomCursor;
