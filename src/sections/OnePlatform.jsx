/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useInView } from "framer-motion";
import { BlackGirl, BlackGirl2, BlackGuy2, OldMan, WhiteGirl, WhiteGuy2 } from "../assets";
import { motion } from "framer-motion";

const CircleWithImage = ({ imageUrl, x, y, isInView }) => {
  return (
    <motion.div 
      className="absolute"
      style={{
        transform: isInView ? `translateX(${x}) translateY(${y})` : "translateX(0px) translateY(0px)",
        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s"
      }}
    >
      <img src={imageUrl} alt="Circle" className="rounded-full object-cover w-[75px] h-[75px] " />
    </motion.div>
  );
};
// const CircleWithImage = ({ imageUrl, x, y }) => {
//   return (
//     <motion.div 
//       className="absolute"
//       initial={{ x: 0, y: 0 }}
//       whileInView={{ x: x, y: y }}
//       transition={{ duration: 1.5 }}
//     >
//       <img src={imageUrl} alt="Circle" className="rounded-full object-cover w-[75px] h-[75px] " />
//     </motion.div>
//   );
// };

const OnePlatform = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: false });
  return (
    <div className='w-full h-auto md:mt-[30px] mb-[41px] px-4 md:px-[40px] lg:px-[80px] bg-[#FBFBFC] '>
      <div className="flex flex-col lg:flex-row h-auto ">
        {/* Left Column */}
        <div className="md:w-[490px] md:h-[372px] mt-4 md:mt-[120px] mb-[10px]">

          <h3 className="text-[16px] font-semibold tracking-normal leading-[24px] text-left text-pry">
            The place for growth
          </h3>

          <h1 
            className=" text-[40px] md:text-[47px] font-semibold tracking-[-0.075rem] leading-[56px] text-left text-secColor md:w-[446px] mt-2 md:mt-[23px]"
          >
            One platform, infinite possibilities
          </h1>

          <p 
            className=" text-[17px] font-normal tracking-normal leading-[32px] text-left text-secColor2 md:w-[486px] mt-[17px]"
          >
            Create a website with a complete suite of advanced functionalities and bring your vision to life.
          </p>

          <div>
            <button type="button" 
              className=" md:w-[146px] h-9 px-[38px] py-[6px] bg-pry hover:bg-indigo-700 rounded-full shadow-md shadow-pry 
              flex justify-center items-center mt-4 md:mt-[28px]
              text-[12px] font-semibold tracking-normal leading-6 text-left text-secColor3  "
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className=" w-full h-[500px] mt-2 md:mt-0 
          bg-[url('/src/assets/SVG.png')] bg-center bg-no-repeat bg-auto "
          ref={ref}
        >

          <div className="relative flex justify-center items-center w-full h-full  ">

            <CircleWithImage imageUrl={BlackGirl2} x={0} y={0} isInView={isInView}/>
            <CircleWithImage imageUrl={OldMan} x={"-160%"} y={"-180%"} isInView={isInView}/>
            <CircleWithImage imageUrl={WhiteGuy2} x={"-155%"} y={"60%"} isInView={isInView}/>
            <CircleWithImage imageUrl={WhiteGirl} x={"150%"} y={"40%"} isInView={isInView}/>
            <CircleWithImage imageUrl={BlackGuy2} x={"30%"} y={"200%"} isInView={isInView}/>
            <CircleWithImage imageUrl={BlackGirl} x={"160%"} y={"-210%"} isInView={isInView}/>

          </div >

        </div>
      </div>
    </div>
  )
}

export default OnePlatform