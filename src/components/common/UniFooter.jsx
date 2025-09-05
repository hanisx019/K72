import React from 'react'


const UniFooter = () => {
    const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString());
    
    React.useEffect(() => {
    const timer = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
    }, []);

  return (
    <div className='bg-black w-full h-[60vh] mt-[-20px] pt-4'>
        <div className='ml-4 flex justify-between '>
            <div className='flex gap-3'>
                <div className='text-7xl font-[font2]  outline-2 rounded-[100px] px-6 rouned-[10px] pt-1 transition-all  hover:text-[#D3FD50]'>FB</div>
                <div className='text-7xl font-[font2]  outline-2 rounded-[100px] px-6 rouned-[10px] pt-1 transition-all  hover:text-[#D3FD50]'>IG</div>
                <div className='text-7xl font-[font2]  outline-2 rounded-[100px] px-6 rouned-[10px] pt-1 transition-all  hover:text-[#D3FD50]'>IN</div>
                <div className='text-7xl font-[font2]  outline-2 rounded-[100px] px-6 rouned-[10px] pt-1 transition-all  hover:text-[#D3FD50]'>BE</div>
            </div>
            <div className='mr-4'>
                <div className='text-7xl font-[font2]  outline-2 rounded-[100px] px-6 rouned-[10px] pt-1 transition-all  hover:text-[#D3FD50]'>CONTACT</div>
            </div>
        </div>
        <div className='flex justify-between items-center mt-[38vh] '>
            <div className="mt-6 mb-2 text-white text-xl font-[font2] text-center ml-4">MONTREAL_ {currentTime}</div>
            <div>
                <div className='flex justify-center-safe font-[font2] gap-6 text-[14px] cursor-pointer mt-[10px] uppercase '>
                    <div className='transition-all  hover:text-[#D3FD50]'>Politique de confidentialité</div>
                    <div className='transition-all  hover:text-[#D3FD50]'>Avis de confidentialité</div>
                    <div className='transition-all  hover:text-[#D3FD50]'>Rapport éthique</div>
                    <div className='transition-all  hover:text-[#D3FD50]'>Options de Consentement</div>
                </div>
            </div>
            <div className='font-[font2] text-xl cursor-pointer uppercase transition-all  hover:text-[#D3FD50] ' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>RETOUR EN HAUT&nbsp;&nbsp;</div>
        </div>
    </div>
  )
}

export default UniFooter