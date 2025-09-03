import React, { useEffect } from "react"; 
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


// Dynamically import all jpg images from assets folder and get their URLs
const allImages = import.meta.glob("../assets/*.jpg", { eager: true });
//
const allowedNames = [
  "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg",
];
//
const imageArray = allowedNames
  .map((name) => allImages[`../assets/${name}`]?.default)
  .filter(Boolean);

const Agence = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // move to top when this page loads
  }, []);
  

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.to(ImageDivRef.current, {
      scrollTrigger: {
        trigger: ImageDivRef.current,
        start: "top 22%",
        end: "top -190%",
        pin: true,
        pinSpacing:true,
        pinReparent:true,
        pinType:'transform',
        scrub: 1,
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          console.log(imageIndex);
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  const ImageDivRef = useRef(null);
  const imageRef = useRef(null);

  return (
    
    <div className="h-screen w-screen bg-white text-black font-[font2] ">

      <div className="section1 py-1">

        <div ref={ImageDivRef}className="absolute w-[230px] rounded-[20px] overflow-hidden  top-[150px] left-[32%]">
          <img ref={imageRef} src={imageArray[0]} />
        </div>

        <div className="relative mt-[55vh] text-[40vh] uppercase text-center lh2">
          <h1>Sixty-<br />seventh<br />Twelve</h1>
        </div>

        <div className="text-6xl ml-[40%]  mt-[15px] relative w-[60%]">
          <p className="pr-[10px] ">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our
            curiosity fuels our creativity. We remain humble and say no to big
            egos, even yours. A brand is alive. It has values, a personality, a
            story. If we forget that, we may make good numbers in the short
            term, but we'll kill it in the long term. That's why we're committed
            to providing perspective, to building influential brands.
          </p>
        </div>

      </div>

      <div className="section2 h-screen">
        
      </div>

    </div>
  );
};

export default Agence;
