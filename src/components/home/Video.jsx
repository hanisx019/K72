import React from 'react'
import videoSrc from '../../assets/Video.mp4';

const Video = () => {
  return (
    <div className='h-full'>
      <video className='h-full w-screen object-cover' autoPlay loop muted src={videoSrc}></video>
    </div>
  )
}

export default Video
