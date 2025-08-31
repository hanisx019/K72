import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='lh1 font-[font2] flex justify-center items-center gap-5 text-center mt-[150px] cursor-pointer'>
        <div onClick={()=>navigate('/Projects')} className='leading-[8.5vw] border-3 border-white rounded-full w-[38vw] h-[16vh] hover:border-[#D3FD50] hover:text-[#D3FD50]'>PROJECTS</div>
        <div onClick={()=>navigate('/Agence')} className='leading-[8.5vw] border-3 border-white rounded-full w-[32vw] h-[16vh] hover:border-[#D3FD50] hover:text-[#D3FD50]'>AGENCE</div>
      </div>
    </div>
  );
};

export default Footer;
