import { motion } from "framer-motion"
import { BlackGirl, BlackGirl2, WhiteBoy } from "../assets"
import { buildingTools } from "../constants/Data"
motion

const scaleVariants = {
    hidden: { 
        opacity: 0, 
        scale: 0 
    },
    show: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
            //For instance, if staggerChildren is 0.01, the first child will be delayed by 0 seconds, 
            //the second by 0.01, the third by 0.02 and so on.
            staggerChildren: 0.2 
        } 
    },
};
  

const scaleChildrenVariants = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { duration: .9 } },
};

const BuildingTool = () => {
  return (
    <div className="w-full h-auto  md:h-[527px] px-4 md:px-[112px] md:pt-[100px] ">
        <div className=" md:flex justify-between items-center ">
            <h2 className=" text-[38px] font-medium tracking-normal leading-[48px] text-left text-secColor md:w-[293px] ">
                More than just a building tool.
            </h2>
            <p className=" text-[16px] font-normal tracking-normal leading-[26px] text-left text-secColor2 md:w-[392px] mt-4 md:mt-0 ">
                A cohesive, user-friendly building software made to support you every step of the way.
            </p>
        </div>

        <div className=" flex flex-col-reverse md:flex-row justify-start items-start pt-4 md:pt-10 h-full md:h-[280px] ">
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-9 w-full md:w-[60%] h-full ">
                {buildingTools.map((tool, index) => (
                    <div key={index}>
                        <p className=" text-[21px] font-normal tracking-normal leading-[29px] text-left text-secColor2 ">
                            {tool.number}
                        </p>
                        <p className=" text-[16px] font-normal tracking-normal leading-[23px] text-left text-secColor2 mt-[25px] mb-[22px] ">
                            {tool.text}
                        </p>
                    </div>
                ))}
            </div>
            {/* show on large screens only */}
            <motion.div 
                variants={scaleVariants}
                initial="hidden"
                whileInView="show"

                className=" hidden md:flex relative md:w-[40%] h-full "
            >
                <motion.img src={BlackGirl} alt="WhiteBoy" variants={scaleChildrenVariants} className="absolute -top-8 left-28 " />
                <motion.img src={BlackGirl2} alt="WhiteBoy" variants={scaleChildrenVariants} className="absolute top-12 right-0 " />
                <motion.img src={WhiteBoy} alt="WhiteBoy" variants={scaleChildrenVariants} className="absolute bottom-0 left-36 " />
            </motion.div>

            {/* show on mobile only */}
            <div className=" flex justify-center items-center md:hidden -space-x-4 overflow-hidden p-2 mb-4 md:mb-0 w-full bg-pry2 ">
                <img src={BlackGirl} alt="WhiteBoy" className=" z-[2] w-14 h-14 border-2 border-white rounded-full " />
                <img src={BlackGirl2} alt="WhiteBoy" className=" z-[1] w-14 h-14 border-2 border-white rounded-full " />
                <img src={WhiteBoy} alt="WhiteBoy" className=" w-14 h-14 border-2 border-white rounded-full " />
            </div>
        </div>
    </div>
  )
}

export default BuildingTool