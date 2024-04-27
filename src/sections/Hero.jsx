import { CiscoLogo, GoogleLogo, VisaLogo } from "../assets/Icons"
import { ParallaxText } from "../components"


const Hero = () => {
  return (
    <div className="flex flex-col justify-start items-center mb-[30px] w-full h-auto px-2 md:px-0">
      <div className="md:w-[846px] md:h-[421px]">
        <h1 
          className="mt-[40px] md:mx-[59px] text-center text-secColor text-[40px] md:text-[65px] font-normal leading-[56px] md:leading-[72px]"
        >
          Create website without
          <span className="block">limits with your team</span>
        </h1>

        <div className="mx-[39px] my-2 md:w-[768px] md:h-[56px] md:px-5 py-0.5 flex justify-center items-center">
          <p className="text-secColor2 text-base text-center font-normal leading-7">What kind of website would you like to create?</p>
        </div>

        <div className="flex flex-col md:w-[657px] h-auto md:mx-[95px]">
          <div className="p-4 flex flex-col md:flex-row justify-start md:items-start space-y-2 md:space-y-0 md:gap-10">
            <div className="webTypes"><p>Portfolio</p></div>
            <div className="webTypes"><p>Online store</p></div>
            <div className="webTypes"><p>Events</p></div>
            <div className="webTypes"><p>Resturant</p></div>
          </div>
          <div className="p-4 hidden md:flex justify-start items-start gap-10">
            <div className="webTypes"><p>Portfolio</p></div>
            <div className="webTypes"><p>Online business</p></div>
            <div className="webTypes"><p>Consultant</p></div>
            <div className="webTypes"><p>Others</p></div>
          </div>
        </div>
      </div>

      <div>
        <button type="button" 
          className="flex justify-center items-center space-x-[4px] px-5 py-2 bg-indigo-900 hover:bg-indigo-700 rounded-full 
          border-[6px] border-violet-300 text-secColor3"
        >
          <p className="text-center text-base font-normal leading-normal">Get Started</p>
          <p className="w-5 h-5 py-[6.67px] flex justify-center items-center">&gt;</p>
        </button>
      </div>

      <div className="flex justify-center items-center w-full md:w-[1216px] md:h-[94px] mt-[22px]">
        <ParallaxText baseVelocity={2} clamp={false}>
          <div className="flex justify-center items-center space-x-[40px] md:space-x-[64px]">
            <VisaLogo/>
            <GoogleLogo className={'w-[150px] h-[40px]'}/>
            <CiscoLogo className={'w-[150px] h-[40px]'}/>
          </div>
        </ParallaxText>
      </div>

    </div>
  )
}

export default Hero