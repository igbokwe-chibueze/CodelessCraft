/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { BlackGuy2, BlondGirl, OldMan, StarBoy, WhiteGirl, WhiteGuy2 } from "../assets";


const CircleWithImage = ({ imageUrl, x, y }) => {
    return (
      <motion.div 
        className="absolute flex justify-center items-center"
        initial={{ x: 0, y: 0 }} // Common initial position
        whileInView={{ x: x, y: y }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
      >
        <img src={imageUrl} alt="Circle" className="rounded-full object-cover " />
      </motion.div>
    );
};

const ForPros = () => {
  return (
    <div className="w-full h-[533px] px-4 md:px-[112px] py-[33px]">
        <div className="grid md:grid-cols-2 mt-4 md:mt-8">
            {/* Text */}
            <div className="md:py-[57px]">
                {/* Heading */}
                <h1 className=" text-[39px] md:text-[56px] font-semibold tracking-normal leading-none text-left text-secColor md:w-[730px]">
                    For Pros, and the ones who want to become experts.
                </h1>
                
                {/* Body */}
                <div className=" mt-2 md:mt-[24px] space-y-4 md:space-y-[33px] ">
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
            <div 
                className="w-full h-full"
            >
                <div className=" hidden relative md:flex justify-center items-center w-full h-[500px] ">
                    <CircleWithImage imageUrl={WhiteGuy2} x={0} y={0}/>
                    <CircleWithImage imageUrl={BlondGirl} x={-170} y={71}/>
                    <CircleWithImage imageUrl={BlackGuy2} x={-30} y={172}/>
                    <CircleWithImage imageUrl={WhiteGirl} x={-111} y={-139}/>
                    <CircleWithImage imageUrl={OldMan} x={126} y={-155}/>
                    <CircleWithImage imageUrl={StarBoy} x={168} y={58}/>
                </div>

                <div className="flex justify-center items-center md:hidden -space-x-4 overflow-hidden p-2">
                    <img src={WhiteGuy2} alt="" className=" w-14 h-14 border-2 border-white rounded-full " />
                    <img src={BlondGirl} alt="" className=" w-14 h-14 border-2 border-white rounded-full " />
                    <img src={BlackGuy2} alt="" className=" w-14 h-14 border-2 border-white rounded-full " />
                    <img src={WhiteGirl} alt="" className=" w-14 h-14 border-2 border-white rounded-full " />
                    <img src={OldMan} alt="" className=" w-14 h-14 border-2 border-white rounded-full " />
                    <img src={StarBoy} alt="" className=" w-14 h-14 border-2 border-white rounded-full " />
                </div>

            </div>
        </div>
    </div>
  )
}

export default ForPros