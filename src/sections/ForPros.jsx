/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { BlackGuy2, BlondGirl, OldMan, StarBoy, WhiteGirl, WhiteGuy2 } from "../assets";


const CircleWithImage = ({ imageUrl, x, y, isInView }) => {
    return (
      <motion.div 
        className="absolute"
        style={{
          transform: isInView ? `translateX(${x}) translateY(${y})` : "translateX(0px) translateY(0px)",
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s"
        }}
      >
        <img src={imageUrl} alt="Circle" className="rounded-full object-cover" />
      </motion.div>
    );
};

const ForPros = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

  return (
    <div className="w-full h-full px-4 md:px-8 lg:px-[112px] py-[33px] ">
        <div className="grid lg:grid-cols-2 mt-4 lg:mt-8">
            {/* Text */}
            <div className="lg:py-[57px]">
                {/* Heading */}
                <h1 className=" text-[39px] md:text-[56px] font-semibold tracking-normal leading-none text-left text-secColor md:w-[730px]">
                    For Pros, and the ones who want to become experts.
                </h1>
                
                {/* Body */}
                <div className=" mt-2 md:mt-4 lg:mt-[24px] space-y-4 lg:space-y-[33px] ">
                    <p className=" text-[16px] md:text-[18px] font-semibold leading-[27px] text-left text-secColor2 ">
                        Whether you&#39;re a solo designer or part of a team, a junior or a senior, 
                        at an agency or a large organization, Prime has you covered.
                    </p>
                    <p className=" text-[16px] md:text-[18px] font-semibold leading-[27px] text-left text-secColor2 ">
                        It’s not about number of components. With <span className=" text-secColor ">top Figma tricks & 
                        techniques, battle-tested design system approach</span>, Prime supercharges your skills, and empowers you to work at warp speed.
                    </p>
                </div>

            </div>

            {/* Images */}
            <div className="w-full h-full" ref={ref} >

                {/*mobile screen*/}
                <div className="flex justify-center items-center lg:hidden -space-x-4 overflow-hidden p-2 md:p-8">
                    <img src={WhiteGuy2} alt="" className=" w-14 h-14 border-2 border-white rounded-full " />
                    <img src={BlondGirl} alt="" className=" w-14 h-14 border-2 border-white rounded-full " />
                    <img src={BlackGuy2} alt="" className=" w-14 h-14 border-2 border-white rounded-full " />
                    <img src={WhiteGirl} alt="" className=" w-14 h-14 border-2 border-white rounded-full " />
                    <img src={OldMan} alt="" className=" w-14 h-14 border-2 border-white rounded-full " />
                    <img src={StarBoy} alt="" className=" w-14 h-14 border-2 border-white rounded-full " />
                </div>

                {/*large screen*/}
                <div className=" hidden relative lg:flex justify-center items-center w-full h-[500px] ">
                    <CircleWithImage imageUrl={WhiteGuy2} x={"0%"} y={'0%'} isInView={isInView}/>
                    <CircleWithImage imageUrl={BlondGirl} x={'-120%'} y={'71%'} isInView={isInView}/>
                    <CircleWithImage imageUrl={BlackGuy2} x={'-10%'} y={'130%'} isInView={isInView}/>
                    <CircleWithImage imageUrl={WhiteGirl} x={'-80%'} y={'-80%'} isInView={isInView}/>
                    <CircleWithImage imageUrl={OldMan} x={'100%'} y={'-100%'} isInView={isInView}/>
                    <CircleWithImage imageUrl={StarBoy} x={'130%'} y={'58%'} isInView={isInView}/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ForPros