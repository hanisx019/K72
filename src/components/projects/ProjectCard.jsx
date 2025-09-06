import React from "react";
import * as Assets from '../../assets/assets.js';
const ProjectCard = (props) => {
  return (
    <div className="w-full h-full mb-2 flex gap-2 ">
      <div className="group relative transition-all rounded-none w-1/2 hover:rounded-[40px] overflow-hidden h-full">
              <img className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" src={props.image1} alt="Project visual 1" />
  <div className="opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 absolute top-0 left-0 h-full w-full  hover:bg-black/40 flex items-center justify-center">
          <h2 className="text-6xl font-[font1] border-2 pt-2 px-4 border-white rounded-full ">
            VIOR LE PROJET
          </h2>
        </div>
      </div>

      <div className="group relative transition-all rounded-none w-1/2 hover:rounded-[40px] overflow-hidden h-full">
              <img className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" src={props.image2} alt="Project visual 2" />
  <div className="opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 absolute top-0 left-0 h-full w-full  hover:bg-black/40 flex items-center justify-center">
          <h2 className="text-6xl font-[font1] border-2 pt-2 px-4 border-white rounded-full ">
            VIOR LE PROJET
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
