import React from 'react'
import UniFooter from '../common/UniFooter';
import { hand2 , vd } from "../../assets/assets.js"
const BlogCom = () => {
  return (
    <div>
    <div className='h-screen w-screen text-black flex justify-center items-center mb-[100px]'>
      <div className='mt-[70px]'>
        <hr className='mb-[10px]'/>
        <div className='flex gap-2 '>
            <img className='w-[750px] h-[490px] rounded-[50px] object-cover ' src={hand2}/>
            <img className='w-[750px] h-[490px] rounded-[50px] object-cover' src={vd}/>
        </div>
        <div className='flex  w-full font-[font2]'>
            <div>
                <p className='ml-[15px] text-[22px] mt-[12px] mb-[7px]'>● 9 mai 2025</p>
                <p className=' ml-[15px] uppercase text-[33px] leading-8'>Conseil & relation client:<br/> un duo qui ne se briefe <br/>pas, qui se construit</p>
            </div>
            <div className=' ml-[16%] w-[40%]'>
                <p className='ml-[5%] text-[22px] mt-[12px] mb-[7px]'>● 9 mai 2025</p>
                <p className=' ml-[5%] uppercase text-[33px] leading-8'>Pub prédictive: L’IA <br/>révolutionne<br/> le ciblage</p>
            </div>
        </div>
      </div>
    </div>
      <UniFooter/>
    </div>
  )
}

export default BlogCom
