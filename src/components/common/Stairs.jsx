import React, { useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavBarContext } from "../../context/NavContext";

const Stairs = (props) => {
  const currentPath = useLocation().pathname;
  const [navOpen] = useContext(NavBarContext);
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(
    function () {
      const tl = gsap.timeline();

      // Make stairs container visible
      tl.set(stairParentRef.current, {
        display: "block",
        pointerEvents: "auto",
        backgroundColor: "black/5",
      });

      // Initial stairs drop-in
      tl.from(".stair", {
        height: 0,
        stagger: { amount: -0.25 },
      });

      // Move stairs down
      tl.to(".stair", {
        y: "100%",
        stagger: { amount: -0.25 },
      });

      // Hide stairs
      tl.set(stairParentRef.current, {
        display: "none",
        pointerEvents: "none",
      });

      // Reset stairs for next use
      tl.set(".stair", { y: "0%" });

      // Finally, reveal the page **after stairs are done**
      tl.from(pageRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.7,
        ease: "power3.out"
      });
      tl.to(pageRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "power3.inOut"
      });
    },
    [currentPath, navOpen]
  );

  return (
    <>
      {/* Stairs Overlay */}
      <div
        ref={stairParentRef}
        className="w-full h-full fixed flex z-10 top-0 bg-black/5"
      >
        <div className="h-full w-screen flex">
          <div className="stair bg-black w-1/5"></div>
          <div className="stair bg-black w-1/5"></div>
          <div className="stair bg-black w-1/5"></div>
          <div className="stair bg-black w-1/5"></div>
          <div className="stair bg-black w-1/5"></div>
        </div>
      </div>

      {/* App Content, excluding MenuBar */}
      {React.Children.map(props.children, child => {
        if (child && child.type && child.type.name === 'MenuBar') {
          // Render MenuBar outside stairs transition
          return null;
        }
        return <div ref={pageRef} className="h-screen">{child}</div>;
      })}
      {/* Render MenuBar separately so it's not affected by stairs */}
      {React.Children.map(props.children, child => {
        if (child && child.type && child.type.name === 'MenuBar') {
          return child;
        }
        return null;
      })}
    </>
  );
};

export default Stairs;
