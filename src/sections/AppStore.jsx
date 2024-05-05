import { Mercury, Shine } from '../assets';

const AppStore = () => {
  return (
    <div className='w-full h-auto lg:h-[790px] lg:px-[112px] lg:pb-[206px]'>
      {/* mx-auto */}
      <div className='relative flex justify-center'>
        {/* app-store section */}
        <div className='relative rounded lg:rounded-2xl w-full lg:w-[1216px] h-full lg:h-[584px] bg-pry p-2 md:p-8 lg:pl-[72px] lg:pt-[104px] lg:pb-[76px]'>
          {/* Text */}
          <div className='lg:w-[488px] lg:h-[360px]'>
            <p className="lg:w-[181px] text-secColor3 text-base font-semibold leading-normal">
              App Store
            </p>
            <p className="lg:w-[672px] lg:h-[153px] text-[#DEDCFF]/80 text-[35px] lg:text-[47px] font-semibold leading-[56px] tracking-[-0.075rem] mt-2 lg:mt-[13px]">
              Website and Mobile <span className=' text-[#FBFBFC]'>templates that sets you and your team up for success</span>
            </p>
            <p className="lg:w-[469px] lg:h-[120px] text-[#ffff] text-[17px] leading-[32px] mt-[22px]">
              Get a headstart on your journey with 900+ free, customizable website templates,
              strategically researched and tailored for every industry — or start from a blank canvas on our website builder.
            </p>
            <p className="mt-[22px] text-secColor3 text-base font-semibold leading-normal">
              View our business app store
            </p>
          </div>
          <img src={Shine} alt="" className='absolute top-0 left-0 w-full lg:w-[1216px] h-full lg:h-[584px]'/>
        </div>

        {/* List */}
        <div className='hidden lg:block absolute top-0 ml-[852px] mt-[156px] mb-[8px] mr-[84px]  w-[280px] h-[421px]'>
          <img src={Mercury} alt="" className='absolute -top-[50px] -right-[63px] max-w-[366px] h-[599px]'/>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
