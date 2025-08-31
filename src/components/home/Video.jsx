import React from 'react'
import videoSrc from '../../assets/Video.mp4';

const Video = () => {
  return (
    <div>
      <video className='h-full w-full object-cover' autoPlay loop muted src={videoSrc}></video>
    </div>
  )
}

export default Video
