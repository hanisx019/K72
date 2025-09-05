import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { NavBarContext } from "../../context/NavContext";
import { Link } from "react-router-dom";

const Navbar = () => {

  const navGreenRef = useRef(null)
  const [navOpen, setNavOpen] = useContext(NavBarContext)
  // Detect current route
  const { pathname } = useLocation();

  return (
    <div className="flex fixed top-0 w-full items-start justify-between z-4">
      <div className="px-3 py-[4px] cursor-pointer">
        <Link to="/" onClick={() => setNavOpen(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="115" height="65" viewBox="0 0 103 44">
          <path fill={(pathname === '/Agence' || pathname === '/Projects') ? 'black' : 'white'} fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
        </svg>
        </Link>
      </div>
      <div onClick={()=>{
        setNavOpen(true)
      }} onMouseEnter={() => {
          navGreenRef.current.style.height = '52px';
          // Change SVG lines to black
          const lines = navGreenRef.current.querySelectorAll('line');
          lines.forEach(line => line.setAttribute('stroke', 'black'));
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = '0px';
          // Change SVG lines back to white
          const lines = navGreenRef.current.querySelectorAll('line');
          lines.forEach(line => line.setAttribute('stroke', 'white'));
        }}
        className="bg-black h-13 w-60">
        <div ref={navGreenRef} className="bg-[#D3FD50] absolute top-0 h-0 w-full transition-all">
          <svg className="mt-[5px]" width="350" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="15" x2="60" y2="15" stroke="white" strokeWidth="1.8"  strokeLinecap="round" />
            <line x1="40" y1="20" x2="60" y2="20" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
