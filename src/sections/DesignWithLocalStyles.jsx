import { ColorVariables } from "../assets"


const DesignWithLocalStyles = () => {
  return (
    <div className="mx-[12px] h-auto rounded-lg md:rounded-[32px] md:flex bg-[#D2EAE1]">
        <div className="md:ml-[37px] pt-4 md:pt-[198px] md:pb-[312px] px-2 md:px-[12px] w-auto">
            <h3 className=" text-xs font-medium tracking-[0.48px] leading-4 text-left text-pry">
                Design System Essentials
            </h3>

            <h1 
                className="pt-[11px] text-[34px] font-semibold tracking-[-0.72px] leading-[34px] text-left text-secColor
                md:w-[556px]"
            >
                Design with Local Styles Including Colors, Typography, and more
            </h1>

            <p className=" pt-[11px] text-base font-normal tracking-[-0.18px] leading-[44px] text-left text-secColor2 md:w-[377px]">
                We provide the design system essentials including Effect Styles, Text Styles, and much more.
            </p>
        </div>

        <div className="md:mr-[11px] md:pt-[16px] md:pb-[80px] w-auto h-auto">
            <img src={ColorVariables} alt="ColorVariables" className=' object-contain'/>
        </div>

    </div>
  )
}

export default DesignWithLocalStyles