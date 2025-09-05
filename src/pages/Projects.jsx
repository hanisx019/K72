import React, { useContext, useEffect } from 'react'
import { NavBarContext } from '../context/NavContext';
import * as Assets from '../assets/assets.js'
import ProjectCard from '../components/projects/ProjectCard.jsx'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BsSubscript } from 'react-icons/bs';
import UniFooter from '../components/common/UniFooter.jsx';

const Projects = () => {

  const [navOpen] = useContext(NavBarContext);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [navOpen]);

  const projects=[{
    image1:Assets.bag,
    image2:Assets.ice
  },{
    image1:Assets.cake,
    image2:Assets.eye
  },{
    image1:Assets.peanuts,
    image2:Assets.juice
  },{
    image1:Assets.men,
    image2:Assets.drink
  },{
    image1:Assets.cap,
    image2:Assets.cat
  },{
    image1:Assets.radient,
    image2:Assets.phone
  },{
    image1:Assets.card,
    image2:Assets.girl
  },{
    image1:Assets.building,
    image2:Assets.teeth
  }]

gsap.registerPlugin(ScrollTrigger);
  useGSAP(function(){
    gsap.from('.hero',{
      height:0,
      stagger:{
        amount:0.4
      },
      scrollTrigger:{
        trigger:'.lol',
        start:'top 100%',
        end:'top -150%',
        scrub:true
      }
    })
  })

  return (
    <>
    <div className='p-4 '>
      <div className='mt-[20vh]'>
    <h2 className='font-[font2] text-[13vw] text-black'>PROJETS<sup className="text-[2.5vw] align-super -translate-y-6 inline-block">16</sup></h2>
      </div>
      <div className='-mt-15 cursor-pointer lol'>
        {projects.map(function(elem,idx){
          return <div key={idx}  className="hero w-full h-[400px] mb-4 flex gap-4 ">
          <ProjectCard image1={elem.image1} image2={elem.image2}/>
          </div>
        })}
      </div>
    </div>
    <div>
      <UniFooter/>
    </div>
    </>
  )
}

export default Projects
