import { CTALeft, CTARight, CTA_Bg } from "../assets"
import { MagicWandIcon } from "../assets/Icons"

const CTASection = () => {
  return (
    <div className="w-full h-full px-4 md:px-8 lg:px-[112px] lg:pt-[87px] pb-4 lg:pb-[112px] lg:mt-28 ">
        <div className=" relative flex justify-between h-[234px] bg-secColor3 ">
            <img src={CTA_Bg} alt="CTA_Bg" className=" absolute inset-0 " />

            <img src={CTALeft} alt="CTALeft" className=" hidden md:block "/>

            {/* top-1/2 and left-1/2 places it 50% from the top and 50% from the left of the parent, transform -translate-x-1/2 -translate-y-1/2 
            to move it back by half of its own width and height, thus centering it */}
            <div 
                className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-start items-center 
                h-full w-auto pt-[78px] space-y-[24px] "
            >
                <h6 
                    className=" text-[16px] md:text-[22px] font-bold md:font-medium tracking-normal leading-[28px] text-center text-pry 
                    w-[200px] md:w-[450px] bg-secColor3 md:bg-transparent rounded-sm "
                >
                    Created for designers and developers
                </h6>
                <button type="button" 
                    className=" flex justify-center items-center space-x-[12px] md:space-x-6 bg-[#11023B] hover:bg-pry text-secColor3 
                    rounded-[8px] py-[6px] px-[12px] w-auto "
                >
                    <MagicWandIcon/>
                    <p className=" text-[14px] font-medium tracking-normal leading-[20px] text-center ">Browse Components</p>
                </button>
            </div>

            <img src={CTARight} alt="CTARight"  className=" md:hidden lg:block"/>
        </div>
    </div>
  )
}

export default CTASection