import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import menuimg1 from '../../assets/menuimg.jpg';
import menuimg2 from '../../assets/menuimg2.jpg';
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';

const MenuBar = () => {
  const fulNavLinkRef = useRef(null)
  const location = useLocation();
    useGSAP(function () {

      const tl = gsap.timeline();

      // Initial State
      tl.from(".stairing", {
        delay:0.3,
        stagger: {
          amount: -0.2,
        }
      })
      tl.from(fulNavLinkRef.current,{
        opacity:0,
    })
    tl.from('.Link1',{
        opacity:0,
        rotateX:90,
        stagger:{
            amount:0.2
        }
    })
    });

  return (
    <div id="MenuBar" className='hidden h-screen w-full absolute bg-black font-[font2] '>
        <div className='h-screen w-full fixed'>
          <div className="h-full w-full flex ">
            <div className="stairing h-full bg-black w-1/5"></div>
            <div className="stairing bg-black w-1/5"></div>
            <div className="stairing bg-black w-1/5"></div>
            <div className="stairing bg-black w-1/5"></div>
            <div className="stairing bg-black w-1/5"></div>
          </div>
        </div>

        <div ref={fulNavLinkRef} className='relative'>
          {/* Only show cross icon if not on home page */}
          {location.pathname !== '/' && (
            <div className='w-[400px] h-[100px] bg-black z-10 fixed top-0 right-0 '>
              <div className='h-[80px] w-[80px] fixed z-20 flex items-center justify-center ' style={{ top: '10px', right: '10px', position: 'fixed' }}>
                <div className='bar1 bg-black w-full h-full relative cursor-pointer mr-4'>
                  <div className='bar2 h-[110px] w-[4px] absolute left-1/2 top-0 -translate-x-1/2 -rotate-45 bg-white'></div>
                  <div className='bar2 h-[110px] w-[4px] absolute left-1/2 top-0 -translate-x-1/2 rotate-45 bg-white'></div>
                </div>
              </div>
            </div>
          )}
    
  <div className='mt-[18vh] leading-0 cursor-pointer'>

        <div className=" Link1 relative">
          <div className='Link1 origin-top flex h-[120px] text-[120px] pt-2 items-center justify-center border-[0.1px] border-gray-400 border-r-0 border-l-0 '>PROJECTS</div>
          <div className="Link2 h-[120px] pt-2 items-center border-[0.1px] border-[#D3FD50] border-r-0 border-l-0 whitespace-nowrap w-full absolute top-0 bg-[#D3FD50] text-black ">
            <div className="moveX flex items-center gap-8 flex-shrink-0">
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg1} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT VOIR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg2} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT VOIR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg1} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT VOIR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg2} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT VOIR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg1} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT VOIR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg2} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT VOIR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg1} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT VOIR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg2} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT VOIR</div>
            </div>
          </div>
        </div>

        <div className=" Link1 relative">
          <div className='Link1 origin-top flex h-[120px] text-[120px] pt-2 items-center justify-center border-[0.1px] border-gray-400 border-r-0 border-l-0 '>AGENCE</div>
          <div className="Link2 h-[120px] pt-2 items-center border-[0.1px] border-[#D3FD50] border-r-0 border-l-0 whitespace-nowrap w-full absolute top-0 bg-[#D3FD50] text-black ">
            <div className="moveX flex items-center gap-8 flex-shrink-0">
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg1} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT SAVIOR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg2} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT SAVIOR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg1} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT SAVIOR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg2} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT SAVIOR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg1} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT SAVIOR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg2} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT SAVIOR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg1} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT SAVIOR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg2} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT SAVIOR</div>
            </div>
          </div>
        </div>

        <div className="Link1 relative">
          <div className='Link1 origin-top flex h-[120px] text-[120px] pt-2 items-center justify-center border-[0.1px] border-gray-400 border-r-0 border-l-0 '>CONTACT</div>
          <div className="Link2 h-[120px] pt-2 items-center border-[0.1px] border-[#D3FD50] border-r-0 border-l-0 whitespace-nowrap w-full absolute top-0 bg-[#D3FD50] text-black ">
            <div className="moveX flex items-center gap-8 flex-shrink-0">
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg1} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR ENVOYER UN FAX</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg2} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR ENVOYER UN FAX</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg1} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR ENVOYER UN FAX</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg2} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR ENVOYER UN FAX</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg1} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR ENVOYER UN FAX</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg2} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR ENVOYER UN FAX</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg1} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR ENVOYER UN FAX</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg2} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR ENVOYER UN FAX</div>
            </div>
          </div>
        </div>

        <div className="Link1 relative">
          <div className='Link1 origin-top flex h-[120px] text-[120px] pt-2 items-center justify-center border-[0.1px] border-gray-400 border-r-0 border-l-0 '>BLOGUE</div>
          <div className="Link2 h-[120px] pt-2 items-center border-[0.1px] border-[#D3FD50] border-r-0 border-l-0 whitespace-nowrap w-full absolute top-0 bg-[#D3FD50] text-black ">
            <div className="moveX flex items-center gap-8 flex-shrink-0">
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg1} /></div>
              <div className="flex-shrink-0 text-[120px]">LIRE LES ARTICLES</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg2} /></div>
              <div className="flex-shrink-0 text-[120px]">LIRE LES ARTICLES</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg1} /></div>
              <div className="flex-shrink-0 text-[120px]">LIRE LES ARTICLES</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg2} /></div>
              <div className="flex-shrink-0 text-[120px]">LIRE LES ARTICLES</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg1} /></div>
              <div className="flex-shrink-0 text-[120px]">LIRE LES ARTICLES</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg2} /></div>
              <div className="flex-shrink-0 text-[120px]">LIRE LES ARTICLES</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg1} /></div>
              <div className="flex-shrink-0 text-[120px]">LIRE LES ARTICLES</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={menuimg2} /></div>
              <div className="flex-shrink-0 text-[120px]">LIRE LES ARTICLES</div>
            </div>
          </div>
        </div>

      </div>

      <div id="footer" className='flex justify-between items-center pt-18'>
        {/* Footer content here */}
      </div>
        </div>

    </div>
  )
}

export default MenuBar;
