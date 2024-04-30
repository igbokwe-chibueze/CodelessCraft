import { sectionsData } from "../constants/Data"


const IdealForEveryone = () => {
  return (
    <div className="w-full h-auto pb-[60px]">
        <div className="w-full flex flex-col justify-center items-center pt-8 md:pt-[72px] md:pb-[80px]">
            <div className="md:w-[564px] px-4 md:px-[84px] md:pt-[49px]">
                <h1 className="text-[40px] font-normal tracking-[-1.6px] leading-[48px] md:text-center text-secColor w-full">
                    Ideal for everyone, but especially for ↓
                </h1>
            </div>

            <div className="md:mt-[48px] px-4 md:px-[120px] py-[36px]">
                <div className="grid md:grid-cols-3">
                    {sectionsData.map((section, index) => (
                        <div key={index}
                            // index % 3 === 2 checks if the remainder of dividing the index by 3 is equal to 2.
                            // In simpler terms, it's checking if the index is two less than a multiple of 3. For example:
                            // When index is 2, 5, 8, 11, etc., the remainder of dividing by 3 is 2, so the expression evaluates to true.
                            // When index is 0, 1, 3, 4, 6, 7, 9, 10, etc., the remainder is not 2, so the expression evaluates to false.
                            className={`relative py-2 md:py-[36px] px-4 md:px-[38px] space-y-2 md:space-y-4 border-l 
                            ${index % 3 === 2 ? ' border-t border-l border-r' : ' border-t border-l border-r md:border-r-0'} 
                            ${index >= 3 ? 'md:border-b' : ''}`}
                        >
                            <img src={section.image} alt="" className="object-contain" />
                            <div className="space-y-2">
                                <p className="text-[16px] font-medium tracking-[-0.18px] leading-[24px] md:text-left text-secColor w-full">
                                    {section.title}
                                </p>
                                <p className="text-[14px] font-normal tracking-[-0.08px] leading-[20px] md:text-left text-secColor2 w-full">
                                    {section.description}
                                </p>
                            </div>
                            <div>
                                <div className="absolute -top-[5px] -left-[4.5px] w-[9px] h-[9px] bg-[#EBEBEB]"></div>
                                <div className="absolute -bottom-[5px] -left-[4.5px] w-[9px] h-[9px] bg-[#EBEBEB]"></div>
                                <div className="absolute -top-[5px] -right-[4.5px] w-[9px] h-[9px] bg-[#EBEBEB]"></div>
                                <div className="absolute -bottom-[5px] -right-[4.5px] w-[9px] h-[9px] bg-[#EBEBEB]"></div>
                                {index == 0 || index == 1 && (
                                    <>
                                        <div className="absolute md:hidden -top-[5px] -right-[4.5px] w-[9px] h-[9px] bg-[#EBEBEB]"></div>
                                        <div className="absolute md:hidden -bottom-[5px] -right-[4.5px] w-[9px] h-[9px] bg-[#EBEBEB]"></div>
                                    </>
                                )}
                                {index == 3 || index == 4 && (
                                    <>
                                        <div className="absolute md:hidden -top-[5px] -left-[4.5px] w-[9px] h-[9px] bg-[#EBEBEB]"></div>
                                        <div className="absolute md:hidden -top-[5px] -right-[4.5px] w-[9px] h-[9px] bg-[#EBEBEB]"></div>
                                        <div className="absolute md:hidden -bottom-[5px] -right-[4.5px] w-[9px] h-[9px] bg-[#EBEBEB]"></div>
                                    </>
                                )}
                                {index == 5 && (
                                    <>
                                        <div className="absolute md:hidden -top-[5px] -left-[4.5px] w-[9px] h-[9px] bg-[#EBEBEB]"></div>
                                        <div className="absolute md:hidden -top-[5px] -right-[4.5px] w-[9px] h-[9px] bg-[#EBEBEB]"></div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    </div>
  )
}

export default IdealForEveryone