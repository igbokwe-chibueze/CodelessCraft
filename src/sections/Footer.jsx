import { ShinyButton } from "../components"
import { footerLinks, socialMedia } from "../constants/Data"

const Footer = () => {
  return (
    <footer className="w-full h-full px-4 md:px-[112px] py-[75px] ">
        {/* <div className='flex justify-between items-start gap-[67px] flex-wrap '> */}
        <div className=' md:flex justify-between items-start md:space-x-[67px] '>
            <div className=" space-y-4 ">
                <h1 className=" font-jaldi text-[54px] md:text-[54px] font-bold tracking-normal leading-[48px] text-left text-secColor2 ">
                    CodelessCraft
                </h1>

                <div className=" flex justify-center items-center bg-neutral-950 py-4 px-4 ">
                 <ShinyButton/>
                </div>
            </div>

            <div className=' grid md:grid-cols-3 gap-10 md:gap-20 mt-4 md:mt-0'>
                {footerLinks.map((section) => (
                    <div key={section.title}>
                        <h4 className='text-[18px] font-medium tracking-normal leading-[28px] text-left mb-[18px]'>
                            {section.title}
                        </h4>
                        <ul>
                            {section.links.map((link) => (
                                <li
                                    className='mt-[10px] text-[17px] font-normal tracking-normal leading-[28px] text-left hover:text-pry'
                                    key={link.name}
                                >
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div>
                    <div className="md:hidden border-t mb-4 "></div>
                    <h4 className='text-[18px] font-medium tracking-normal leading-[28px] text-left mb-[18px]'>
                        Stay up to date
                    </h4>
                    <div className=" w-[300px] space-y-[10px] ">
                        
                        <div className="relative w-5/6">
                            <div className="pointer-events-auto absolute inset-y-0 right-0 flex items-center pr-4 w-8 bg-secColor rounded-r-full ">
                                {/* This was for the search icon */}
                                {/* <svg className="absolute text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path 
                                        fillRule="evenodd" 
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 
                                        0 012 8z" 
                                        clipRule="evenodd" 
                                    />
                                </svg> */}
                            </div>
                            <input type="text" 
                                className="bg-white w-full border border-slate-300 rounded-md rounded-r-full py-2 pl-4 pr-3 shadow-sm focus:outline-none 
                                focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                                placeholder="Search"
                            />
                        </div>

                        <p className="text-[14px] font-normal tracking-normal leading-[17px] text-left ">
                            I confirm that I have read Primer’s Privacy policy and agree with it.
                        </p>
                        <div className="flex items-center gap-2">
                            {socialMedia.map((icon) => (
                                <div
                                    className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                                    key={icon.label}
                                >
                                    {icon.imgURL}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer