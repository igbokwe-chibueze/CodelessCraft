import { navLinks } from '../constants/Data';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <nav className="w-full p-4">
      <div className="flex items-center">
        {/* Site Name */}
        <a href="/" className="text-secColor font-bold leading-48px">
          CodelessCraft
        </a>

        {/* Centered Links and Request Demo Button */}
        <div className="hidden md:flex items-center space-x-6 container mx-auto border rounded-2xl 
          border-secColor3 w-auto p-2"
        >
          <div>
            {/* Rendering the NavItem component and passing navLinks data as prop */}
            <NavItem data={navLinks}/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar