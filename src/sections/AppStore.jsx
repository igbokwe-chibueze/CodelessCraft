import { Mercury, Shine } from '../assets';

const AppStore = () => {
  return (
    <div className='w-full h-auto md:h-[790px] md:px-[112px] md:pb-[206px]'>
      {/* mx-auto */}
      <div className='relative flex justify-center'>
        {/* app-store section */}
        <div className='relative rounded md:rounded-2xl w-full md:w-[1216px] h-full md:h-[584px] bg-pry px-2 py-2 md:pl-[72px] md:pt-[104px] md:pb-[76px]'>
          {/* Text */}
          <div className='md:w-[488px] md:h-[360px]'>
            <p className="md:w-[181px] text-secColor3 text-base font-semibold leading-normal">
              App Store
            </p>
            <p className="md:w-[672px] md:h-[153px] text-[#DEDCFF]/80 text-[35px] md:text-[47px] font-semibold leading-[56px] tracking-[-0.075rem] mt-2 md:mt-[13px]">
              Website and Mobile <span className=' text-[#FBFBFC]'>templates that sets you and your team up for success</span>
            </p>
            <p className="md:w-[469px] md:h-[120px] text-[#ffff] text-[17px] leading-[32px] mt-[22px]">
              Get a headstart on your journey with 900+ free, customizable website templates,
              strategically researched and tailored for every industry — or start from a blank canvas on our website builder.
            </p>
            <p className="mt-[22px] text-secColor3 text-base font-semibold leading-normal">
              View our business app store
            </p>
          </div>
          <img src={Shine} alt="" className='absolute top-0 left-0 w-full md:w-[1216px] h-full md:h-[584px]'/>
        </div>

        {/* List */}
        <div className='hidden md:block absolute top-0 ml-[852px] mt-[156px] mb-[8px] mr-[84px]  w-[280px] h-[421px]'>
          <img src={Mercury} alt="" className='absolute -top-[50px] -right-[63px] max-w-[366px] h-[599px]'/>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
