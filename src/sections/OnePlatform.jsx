/* eslint-disable react/prop-types */
import { CircularWeb } from "../assets/Icons"
import { BlackGuy, WhiteGuy } from "../assets";
import { motion } from "framer-motion";


const CircleWithImage = ({ imageUrl, x, y }) => {
  return (
    <motion.div 
      className="absolute top-1/3 left-1/2"
      initial={{ x: -40, y: 10 }} // Common initial position
      whileInView={{ x: x, y: y }}  // Different animate positions
      transition={{ duration: 1.5 }}
    >
      <img src={imageUrl} alt="Circle" className="rounded-full object-cover w-12 md:w-16 h-12 md:h-16" />
    </motion.div>
  );
};

const OnePlatform = () => {
  return (
    <div className='w-full h-screen mt-[30px] px-4 md:px-[80px]'>
      <div className="flex flex-col md:flex-row md:pl-[32px] h-full">
        {/* Left Column */}
        <div className="md:w-[490px] md:h-[372px] mt-16 md:mt-[120px] mb-[10px] md:mb-[204px]">

          <p className="md:w-[180.50px] md:h-[21px] text-pry text-base font-semibold leading-normal">
            The place for growth
          </p>

          <p 
            className="md:w-[446px] md:h-[118px] text-secColor text-[40px] md:text-[47px] 
            font-semibold leading-[56px] tracking-[-0.075rem] mt-2 md:mt-[23px]"
          >
            One platform,<span className="block mt-2">infinite possibilities</span>
          </p>

          <p 
            className="md:w-[486px] md:h-[78px] text-secColor2 text-[17px] leading-[32px] mt-[17px]"
          >
            Create a website with a complete suite of advanced functionalities and bring your vision to life.
          </p>

          <div className="md:w-[146px] h-9 px-[38px] bg-pry rounded-full shadow-md shadow-pry flex justify-center items-center mt-4 md:mt-[28px]">
            <a 
              href=""
              className="text-secColor3 text-xs font-semibold leading-6"
            >
              Get started
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative md:w-[798px] md:h-[700px]">
          <CircularWeb className={'w-full md:w-[599px] h-full md:h-[535px] mb-10 md:mb-0'}/>

          {/* Small Screen */}
          <div className="absolute inset-0 flex md:hidden justify-center items-center">
            <CircleWithImage imageUrl={BlackGuy} x={-25} y={14}/>
            <CircleWithImage imageUrl={WhiteGuy} x={-70} y={-80}/>
            <CircleWithImage imageUrl={WhiteGuy} x={-150} y={40}/>
            <CircleWithImage imageUrl={WhiteGuy} x={80} y={40}/>
            <CircleWithImage imageUrl={BlackGuy} x={20} y={120}/>
            <CircleWithImage imageUrl={BlackGuy} x={50} y={-50}/>
          </div>

          {/* Large Screen */}
          <div className="hidden absolute inset-0 md:flex justify-center items-center">
            <CircleWithImage imageUrl={BlackGuy} x={-40} y={0}/>
            <CircleWithImage imageUrl={WhiteGuy} x={-170} y={-180}/>
            <CircleWithImage imageUrl={WhiteGuy} x={-200} y={40}/>
            <CircleWithImage imageUrl={WhiteGuy} x={200} y={40}/>
            <CircleWithImage imageUrl={BlackGuy} x={50} y={160}/>
            <CircleWithImage imageUrl={BlackGuy} x={100} y={-120}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnePlatform