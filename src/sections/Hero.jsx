import { PinkArrow, WhiteGirl2, WhiteGirl3, YellowArrow } from "../assets"
import { CiscoLogo, GoogleLogo, VisaLogo } from "../assets/Icons"
import { ParallaxText } from "../components"


const Hero = () => {
  return (
    <div className=" flex flex-col justify-start items-center mb-[30px] w-full h-auto lg:h-full px-2 lg:px-0">
      
      <div className=" relative lg:w-[846px] md:h-auto ">
        <h1 
          className=" mt-4 md:mt-[40px] md:mx-[59px] text-[40px] md:text-[68px] font-nomal -tracking-[1.8px] 
          leading-[56px] md:leading-[72px] text-center text-secColor"
        >
          Create <mark className="px-2 text-white bg-pry hover:bg-pry2 rounded ">website</mark> without limits with your team
        </h1>

        {/* I used this when i wanted to just create a curvy line under the word "website" */}
        {/* <h1 
          className=" mt-4 md:mt-[40px] md:mx-[59px] text-[40px] md:text-[68px] font-nomal -tracking-[1.8px] 
          leading-[56px] md:leading-[72px] text-center text-secColor"
        >
          Create <span className=" underline md:no-underline underline-offset-4 decoration-pry/70 decoration-wavy ">website</span> without limits with your team
        </h1> */}

        <div className="mx-[39px] my-2 lg:w-[768px] md:h-[56px] md:px-5 py-0.5 flex justify-center items-center ">
          <p className="text-[17px] font-normal tracking-normal leading-[28px] text-center text-secColor2">
            What kind of website would you like to create?
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center px-4 ">
          <div className=" p-4 md:flex justify-center items-center space-y-2 md:space-y-0 md:space-x-10 w-full ">
            <div className="webTypes"><p>Portfolio</p></div>
            <div className="webTypes"><p>Online store</p></div>
            <div className="webTypes"><p>Events</p></div>
            <div className="webTypes"><p>Resturant</p></div>
          </div>

          <div className=" p-4 hidden md:flex justify-center items-center space-x-10 w-full ">
            <div className="webTypes"><p>Portfolio</p></div>
            <div className="webTypes"><p>Online store</p></div>
            <div className="webTypes"><p>Events</p></div>
            <div className="webTypes"><p>Resturant</p></div>
          </div>
        </div>
      </div>

        
      <div>
        <button type="button" 
          className="flex justify-center items-center space-x-[4px] px-5 py-2 bg-indigo-900 hover:bg-indigo-700 rounded-full 
          border-[6px] border-violet-300 text-secColor3 mt-4 "
        >
          <p className="text-center text-base font-normal leading-normal">Get Started</p>
          <p className="w-5 h-5 py-[6.67px] flex justify-center items-center">&gt;</p>
        </button>
      </div>

      <div className="flex justify-center items-center w-full md:h-[94px] mt-[22px] ">
        <ParallaxText baseVelocity={2} clamp={false}>
          <div className="flex justify-center items-center space-x-[40px] md:space-x-[64px]">
            <VisaLogo/>
            <GoogleLogo className={'w-[150px] h-[40px]'}/>
            <CiscoLogo className={'w-[150px] h-[40px]'}/>
          </div>
        </ParallaxText>
      </div>

      <div className=" -z-10 hidden lg:flex absolute inset-0 ">
        <div className=" relative w-full h-full ">
          <img src={WhiteGirl2} alt="WhiteBoy" className="absolute top-[100px] right-[70px] " />
          <img src={WhiteGirl3} alt="WhiteBoy" className="absolute bottom-[210px] left-[210px] " />

          <img src={YellowArrow} alt="YellowArrow" className="absolute top-[190px] right-[270px] " />
          <span 
            className="text-[14px] font-medium tracking-normal leading-[20px] text-center text-secColor p-1 px-3 bg-[#FFDE6A]
            rounded-full absolute top-[200px] right-[160px]"
          >
            Proj. Manager
          </span>
          <img src={PinkArrow} alt="PinkArrow" className="absolute top-[280px] left-[350px] " />
          <span 
            className="text-[14px] font-medium tracking-normal leading-[20px] text-center text-secColor p-1 px-3 bg-[#FF8C78]
            rounded-full absolute top-[290px] left-[240px] w-[110px]"
          >
            Developer
          </span>
        </div>
      </div>

    </div>
  )
}

export default Hero