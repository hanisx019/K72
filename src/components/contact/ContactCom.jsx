import React from 'react'

const ContactCom = () => {
  return (
    <div className='h-screen w-screen bg-black relative py-[95px]'>
      <div className=" font-[font1] text-[140px] leading-28 uppercase text-center">
          <div className=''><p>Pour<br /> parler de <br />votre<br /> projet</p></div>
      </div>
      <div className='absolute ml-[100px] top-[450px] text-center font-[font2]'><p>Dans un écran ou un bureau.<br/>Chez vous. Chez nous.<br/>Partout.</p></div>
      <div  className='absolute ml-[80%] top-[450px] mt-[10px] text-center font-[font2]'><p>525 Av. Viger O - Suite 400 <br/>Montréal, QC H2Z 1G6 →</p></div>
      <div>
        <div className='uppercase text-center mt-[30px] font-[font2]'>Suivez-nous</div>
        <div>
          <div className='flex gap-3 cursor-pointer justify-center mt-[30px]'>
                <div className='text-6xl font-[font2]  outline-2 rounded-[100px] px-6 rouned-[10px] pt-1 transition-all  hover:text-[#D3FD50]'>FB</div>
                <div className='text-6xl font-[font2]  outline-2 rounded-[100px] px-6 rouned-[10px] pt-1 transition-all  hover:text-[#D3FD50]'>IG</div>
                <div className='text-6xl font-[font2]  outline-2 rounded-[100px] px-6 rouned-[10px] pt-1 transition-all  hover:text-[#D3FD50]'>IN</div>
                <div className='text-6xl font-[font2]  outline-2 rounded-[100px] px-6 rouned-[10px] pt-1 transition-all  hover:text-[#D3FD50]'>BE</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCom
