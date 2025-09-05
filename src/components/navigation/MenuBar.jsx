import React, { useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import menuimg1 from '../../assets/menuimg.jpg';
import menuimg2 from '../../assets/menuimg2.jpg';
import { hand, hrt } from '../../assets/assets';
import { vd } from '../../assets/assets';
import { sh1 } from '../../assets/assets';
import { sh2 } from '../../assets/assets';
import { Link } from 'react-router-dom';

import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap'; 
import { NavBarContext } from '../../context/NavContext';
const MenuBar = (props) => {
  const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const fullNavLinksRef = useRef(null)
  const fullScreenRef = useRef(null)
  const [navOpen, setNavOpen] = useContext(NavBarContext)
  // Accept onClose callback from props
  const { onClose } = props || {};


  const location = useLocation();

  function gsapAnimation() {
      // Reset stairs position for open
      gsap.set('.stairing', { y: 0 });
      const tl = gsap.timeline();
      // Opening: stairs animate downward (top to bottom)
      tl.from(".stairing", {
        delay:0.5,
        height: 0,
        stagger: {
          amount: -0.5,
          from: 'start',
        }
      })
      tl.from('.Link1',{
        opacity:0,
        rotateX:90,
        stagger:{
            amount:0.5
        }
      })
      tl.from('.navLink',{
        opacity:1,
      })
  }

  function gsapAnimationReverse() {
  const tl = gsap.timeline();

  // Fade out links quickly
  tl.from('.Link1', {
    opacity: 1,
    rotateX: 90,
    duration: 0.3,
    stagger: {
      amount: 0.2,
    },
  });

  // Slide all stairs downward out of view
  tl.from('.stairing', {
    y: '100%', 
    height: 100,
    duration: 0.6,
    ease: "power3.in",
  }, "-=0.2"); // overlap a bit for smoothness

  tl.from(".stairing", {
    y: '0',
    delay:0.5,
    height: 0,
    stagger: {
    amount: -0.5,
    from: 'start',
  }
  })

  // Fade out nav container
  tl.to('.navLink', {
    opacity: 0,
    duration: 0.3,
  }, "-=0.3");
  }

  useGSAP(function (){
      if(navOpen){
        gsap.to('.fulScreenRef',{
          display:'block'
        })
        gsapAnimation()
        document.body.style.overflow = 'hidden';
      }else{
        gsapAnimationReverse();
        setTimeout(() => {
          gsap.to('.fulScreenRef',{
            display:'none'
          })
          document.body.style.overflow = 'auto';
          document.body.style.overflowY = 'auto';
        }, 700); // match animation duration
      }
  },[navOpen]);

  return (
  <div ref={fullScreenRef} id="MenuBar" className={`z-[9999] h-screen w-full fixed font-[font2] overflow-y-auto ${location.pathname === '/Agence' ? 'bg-white' : 'bg-black'}`}>

      <div className='h-screen w-full fixed'>
        <div className="h-full w-full flex ">
          <div className="stairing h-full bg-black w-1/5"></div>
          <div className="stairing bg-black w-1/5"></div>
          <div className="stairing bg-black w-1/5"></div>
          <div className="stairing bg-black w-1/5"></div>
          <div className="stairing bg-black w-1/5"></div>
        </div>
      </div>

    {/* K72 SVG logo in left corner, always visible above stairs */}
  <div className="fixed top-0 left-0 px-3 py-[4px] z-[10000] pointer-events-auto flex gap-6">
  <Link to="/" onClick={() => setNavOpen(false)}>
  <svg xmlns="http://www.w3.org/2000/svg" width="115" height="65" viewBox="0 0 103 44">
        <path fill={'white'} fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
      </svg>
      </Link>
      <div className='mt-1 ml-4'>FR  &nbsp;<span className='text-[#4D4D4D]'>/  &nbsp;EN</span></div>
    </div>

      <div ref={fullNavLinksRef} className='relative'>
          {/* Always show cross icon */}
          <div className='navLink w-[400px] h-[100px] bg-black z-10 fixed top-0 right-0 '>
            <div className='h-[80px] w-[80px] fixed z-20 flex items-center justify-center ' style={{ top: '10px', right: '10px', position: 'fixed' }}>
              <div className='bar1 bg-black w-full h-full relative cursor-pointer mr-4' onClick={() => {
                setNavOpen(false);
                if (typeof onClose === 'function') onClose();
              }}>
                <div className='bar2 h-[110px] w-[4px] absolute left-1/2 top-0 -translate-x-1/2 -rotate-45 bg-white'></div>
                <div className='bar2 h-[110px] w-[4px] absolute left-1/2 top-0 -translate-x-1/2 rotate-45 bg-white'></div>
              </div>
            </div>
          </div>
    
  <div className='mt-[18vh] leading-0 cursor-pointer'>

        <div className=" Link1 relative">
          <div className='Link1 origin-top flex h-[120px] text-[120px] pt-2 items-center justify-center border-[0.1px] border-gray-400 border-r-0 border-l-0 '>PROJETS</div>
          <div className="Link2 h-[120px] pt-2 items-center border-[0.1px] border-[#D3FD50] border-r-0 border-l-0 whitespace-nowrap w-full absolute top-0 bg-[#D3FD50] text-black ">
          <Link to='/Projects' onClick={() => setNavOpen(false)}>
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
            </Link>
          </div>
        </div>
        

        <div className=" Link1 relative">
          <div className='Link1 origin-top flex h-[120px] text-[120px] pt-2 items-center justify-center border-[0.1px] border-gray-400 border-r-0 border-l-0 '>AGENCE</div>
          <div className="Link2 h-[120px] pt-2 items-center border-[0.1px] border-[#D3FD50] border-r-0 border-l-0 whitespace-nowrap w-full absolute top-0 bg-[#D3FD50] text-black ">
          <Link to='/Agence' onClick={() => setNavOpen(false)}>
            <div className="moveX flex items-center gap-8 flex-shrink-0">
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={sh2} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT SAVIOR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={sh1} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT SAVIOR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={sh2} /></div>
              <div className="flex-shrink-0 text-[120px]">POUR TOUT SAVIOR</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={sh1} /></div>
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
               </Link>
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
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={hand} /></div>
              <div className="flex-shrink-0 text-[120px]">LIRE LES ARTICLES</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={vd} /></div>
              <div className="flex-shrink-0 text-[120px]">LIRE LES ARTICLES</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={hand} /></div>
              <div className="flex-shrink-0 text-[120px]">LIRE LES ARTICLES</div>
              <div className="flex-shrink-0 w-[140px] pb-2"><img className='rounded-[50px]' src={vd} /></div>
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

      <div id="footer" className='flex justify-center items-center pt-18 uppercase'>
        <div className="fixed bottom-[12px] left-4 z-[10002] bg-black/70 text-white px-4 py-2 rounded-lg font-[font2]">MONTREAL_ {currentTime}</div>
        <div className='flex justify-center-safe font-[font2] gap-6 text-[12px] cursor-pointer '>
          <div className='transition-all  hover:text-[#D3FD50]'>Politique de confidentialité</div>
          <div className='transition-all  hover:text-[#D3FD50]'>Avis de confidentialité</div>
          <div className='transition-all  hover:text-[#D3FD50]'>Rapport éthique</div>
          <div className='transition-all  hover:text-[#D3FD50]'>Options de Consentement</div>
        </div>
        <div className='flex font-[font2] text-[28px] gap-1 right-5 absolute mb-1 cursor-pointer font-extrabold '>
          <div className='border-2 rounded-[25px] w-[60px] h-[45px] pl-3 pt-[2px] transition-all  hover:text-[#D3FD50] '>FB</div>
          <div className='border-2 rounded-[25px] w-[60px] h-[45px] pl-3 pt-[2px] transition-all hover:text-[#D3FD50] '>IG</div>
          <div className='border-2 rounded-[25px] w-[60px] h-[45px] pl-3 pt-[2px] transition-all hover:text-[#D3FD50] '>IN</div>
          <div className='border-2 rounded-[25px] w-[60px] h-[45px] pl-3 pt-[2px] transition-all hover:text-[#D3FD50] '>BE</div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default MenuBar;
