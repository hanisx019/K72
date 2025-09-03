import React from "react";
import Video from "./Video";

const Header = () => {
  return (
  <div className="uppercase relative">
      <div className="font-[font1] flex flex-col justify-center items-center text-center lh mt-30">
        <div >L'étincelle</div>
        <div className="flex flex-row justify-center">
          qui
          <div className=" w-[15%] h-[120px] rounded-[100px] overflow-hidden">
            <Video />
          </div>
        <div>génère</div>
        </div>
        <div>la créativité</div>
      </div>
    </div>
  );
};
export default Header;
