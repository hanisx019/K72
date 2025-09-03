import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='lh1 font-[font2] flex justify-center items-center gap-5 text-center mt-[30px] cursor-pointer mb-[10px] '>
        <div onClick={()=>navigate('/Projects')} className='px-6 py-3  leading-[5vw] border-3 border-white rounded-full  hover:border-[#D3FD50] hover:text-[#D3FD50] '>PROJECTS</div>
        <div onClick={()=>navigate('/Agence')} className='px-6 py-3 leading-[5vw] border-3 border-white rounded-full  hover:border-[#D3FD50] hover:text-[#D3FD50]'>AGENCE</div>
      </div>
    </div>
  );
};

export default Footer;
