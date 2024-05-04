import { navLinks } from '../constants/Data';
import Menu from './Menu';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    // Best practice, only color styles (eg bg-color, border-color) should go into the "nav" class.
    <nav className="bg-white">
      <div className="relative max-w-screen-xl mx-auto flex flex-wrap justify-between items-center p-2 sm:p-4">
        {/* Site Name..... The absolute is because it prevents the Site Name width from displacing the NavItem from the center of the nav.
            This is percular to this project. In most cases i wont be specificaly centering the NavItem, so i wont need this absolute.
         */}
        <a href="/" className=" xl:absolute font-jaldi text-[40px] md:text-[54px] font-bold tracking-normal leading-[48px] text-left text-secColor2">
          CodelessCraft
        </a>

         <div className='lg:hidden'>
          <Menu/>
         </div>

        {/* Centered Links and Request Demo Button, container and mx-auto helps center the navlist */}
        <div className="hidden lg:flex items-center space-x-6 container mx-auto border rounded-2xl border-secColor3 w-auto p-2">

          {/* Rendering the NavItem component and passing navLinks data as prop */}
          <NavItem data={navLinks}/>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar