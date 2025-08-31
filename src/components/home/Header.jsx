import React from 'react'
import Video from './Video'

const Header = () => {
  return (
    <div>
      <div className='font-[font1] flex flex-col justify-center items-center text-center lh mt-4'>
        <div>THE SPARK</div>
        <div className='flex flex-row justify-center'>WHO<div className=' w-[15%] h-[120px] rounded-[100px] overflow-hidden'>
            <Video />
          </div>
        </div>
        <div >GENERATES</div>
        <div>THERE</div>
        <div>CREATIVITY</div>
      </div>
    </div>
  )

}
export default Header