/* eslint-disable react/prop-types */
import { useState } from 'react';

const NavItem = ({ data }) => {
  
  // Default animation style for the hover bar
  const defaultAnimationStyle = {
    width: '50px',
    left: '0px',
  };
  
  // State to manage animation style and active link
  const [animationStyle, setAnimationStyle] = useState(defaultAnimationStyle);
  const [activeLink, setActiveLink] = useState(null);

  // Function to handle hover event on a link
  
  const handleHover = (index) => {
    setAnimationStyle({
      width: data[index].width,  // Using width from data
      left: data[index].left,    // Using left from data
    });
  };

//   const handleHover = (index) => {
//     const widths = [50, 55, 55, 55, 85];  // Widths for each link
//     const lefts = [0, 60, 128, 188, 250];  // Left positions for each link

//     // Update animation style based on the hovered link
//     setAnimationStyle({
//       width: `${widths[index]}px`,
//       left: `${lefts[index]}px`,
//     });
//   };

  // Function to handle mouse leave event
  const handleLeave = () => {
    if (activeLink !== null) {
      handleHover(activeLink);  // Return to active link's style
    } else {
      setAnimationStyle(defaultAnimationStyle);  // Return to default style
    }
  };

  // Function to handle click event on a link
  const handleClick = (index) => {
    setActiveLink(index);  // Set the clicked link as active
    handleHover(index);  // Update animation style
  };

  return (
    <div className="relative flex items-center space-x-6">
        <div 
            className="relative flex space-x-1"
            onMouseLeave={handleLeave}
        >
            {/* Rendering navigation links based on the data prop */}
            {data.map((link, index) => (
                <a 
                    key={index}
                    href={link.href} 
                    className={`px-3 py-2 leading-normal text-sm text-secColor2 rounded z-10`}
                    // className={`px-3 py-2 ${link.width} leading-normal text-sm text-secColor2 rounded z-10`}
                    onMouseEnter={() => handleHover(index)} 
                    onClick={() => handleClick(index)}
                >
                    {link.text}
                </a>
            ))}
            {/* Hover bar for animation */}
            <div 
                // If you want this to just be a line use h-[5px] and replace top-0 with bottom-0
                className="absolute top-0 left-0 h-full bg-secColor3 rounded-md transition-all duration-500 ease-in-out"
                style={{ ...animationStyle }}
            />
        </div>

        {/* Request Demo Button */}
        <div>
            <a
                href=""
                className="flex items-center justify-center px-3 py-2 rounded-lg bg-secColor hover:bg-secColor3 
                text-secColor3 hover:text-secColor2 text-sm leading-normal text-center transition-colors duration-500 ease-in-out"
            >
                Request Demo
            </a>

        </div>
    </div>
  );
};

export default NavItem;
