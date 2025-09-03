import React from "react"; 
import { useRef } from "react";
import { useLocation } from "react-router-dom"; // required for Page Location
import { useGSAP } from "@gsap/react"; // required for gsap
import gsap from "gsap"; // required for gsap

// The props contains the App 
const Stairs = (props) => {

  const currentPath = useLocation().pathname; // Here Location is used for Displaying Stairs Animation on Each page Renders

  const stairParentRef = useRef(null); // Reference Hook For Complete Stairs Animation Page
  const pageRef = useRef(null); // Reference Hook For Conmplete App

  // Stairs Animation 
  useGSAP(function () {

      const tl = gsap.timeline();

      // Making Stair Window Visible 
      tl.to(stairParentRef.current, {
        display: "block",
      });

      // Initial State
      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.25,
        },
      });

      // Final State
      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.25,
        },
      });

      // Making Stair Window Invisible 
      tl.to(stairParentRef.current, {
        display: "none",
      });
      tl.to(".stair", {
        y: "0%",
      });

      // This GSAP Animation is Written For Loading  the Stairs Animation Before App Loads
      gsap.from(pageRef.current,{
          opacity:0,
          delay:1.3,
          scale:1.2
        })

    },[currentPath]); // Here CurrentPath is used on appliying stairs animation on each page loading

  return (
    <div>

      {/* Div Contains The Stairs Component*/}
      <div ref={stairParentRef} className="w-full h-full fixed flex z-10 top-0">
        <div className="h-full w-screen flex ">
          <div className="stair h-full bg-black w-1/5"></div>
          <div className="stair bg-black w-1/5"></div>
          <div className="stair bg-black w-1/5"></div>
          <div className="stair bg-black w-1/5"></div>
          <div className="stair bg-black w-1/5"></div>
        </div>
      </div>

      {/*This Div Contains the App */}
      <div ref={pageRef} className="h-screen">
        {props.children}
      </div> 

    </div>
  );
};

export default Stairs;
