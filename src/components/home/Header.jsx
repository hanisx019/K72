import React from "react";
import Video from "./Video";

const Header = ({ videoRef, onVideoReady }) => {
  return (
    <div className=" relative">
      <div className="bigtext mid uppercase font-[font1] flex flex-col justify-center items-center text-center lh mt-10">
        <div >L'étincelle</div>
        <div className="flex flex-row justify-center items-center vidparentx">
          qui
          <div className="w-[15%] h-[120px] rounded-[100px] overflow-hidden vidparent">
            <Video ref={videoRef} onReady={onVideoReady} className="vid" />
          </div>
        <div>génère</div>
        </div>
        <div>la créativité</div>
      </div>
      <div className=" w-1/5 absolute right-0 font-[font1] text-[14px] mt-4 mr-2 para">   
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
      </div>
    </div>
  );
};
export default Header;
