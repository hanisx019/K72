
import React, { forwardRef } from 'react';
import videoSrc from '../../assets/Video.mp4';

// Accept ref and onReady callback
const Video = forwardRef(({ onReady, className = '' }, ref) => {
  return (
    <div className={'h-full ' + className}>
      <video
        ref={ref}
        className='h-full w-screen object-cover'
        loop
        muted
        src={videoSrc}
        onCanPlayThrough={onReady}
        playsInline
      />
    </div>
  );
});

export default Video;
