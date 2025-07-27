// import React from 'react';
// const logo = new URL('../utils/logo.png', import.meta.url).href;


// const NavigationBar = () => {
//     console.log(logo);
//   return (
//     <>
//     <div className='navigationBarWrapper'>
//     <div className='navigationBarContainer'>
//       <div className='logoContainer'>
//         <img src={logo} alt="Logo" />
//       </div>
//       <div className="navigationBar">
//         <ul className="navList">
//           <li className="navItem">Home</li>
//           <li className="navItem">About Us</li>
//           <li className="navItem">Contact Us</li>
//           <li className="navItem">Sign Up</li>
          
//         </ul>
//       </div>
//     </div>
//     </div>
//     </>
    
//   );
// };

// export default NavigationBar;
// import React, { useState } from 'react';
// const logo = new URL('../utils/logo.png', import.meta.url).href;
// import './NavigationBar.css'; // Assuming you have a CSS file for styles
// const NavigationBar = ({ currentPage, setCurrentPage }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'contact', label: 'Contact' },
//     { id: 'signup', label: 'Sign Up' }
//   ];

//   const handleNavClick = (pageId) => {
//     setCurrentPage(pageId);
//     setIsMenuOpen(false);
//   };
//   return (
//     <nav className='navigationBarWrapper'>
//       <div className='navigationBarContainer'>
        
//         <div className='logoContainer'>
//           <img src={logo} alt="Company Logo" className="logoImage" />
//         </div>

//         <button 
//           className="hamburger" 
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle navigation menu"
//         >
//           <span className="hamburger-bar"></span>
//           <span className="hamburger-bar"></span>
//           <span className="hamburger-bar"></span>
//         </button>
        
//         <ul className={isMenuOpen ? 'navList active' : 'navList'}>
//           <li className="navItem"><a href="#">Home</a></li>
//           <li className="navItem"><a href="#">About Us</a></li>
//           <li className="navItem"><a href="#">Contact Us</a></li>
//           <li className="navItem"><a href="#">Sign Up</a></li>
//         </ul>
        
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;
// import React, { useState } from 'react';
// const logo = new URL('../utils/logo.png', import.meta.url).href;
// import './NavigationBar.css'; // Assuming you have a CSS file for styles

// const NavigationBar = ({ currentPage, setCurrentPage }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'contact', label: 'Contact' },
//     { id: 'signup', label: 'Sign Up' }
//   ];

//   const handleNavClick = (pageId) => {
//     setCurrentPage(pageId);
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className='navigationBarWrapper'>
//       <div className='navigationBarContainer'>
        
//         <div className='logoContainer'>
//           <img src={logo} alt="Company Logo" className="logoImage" />
//         </div>

//         <button 
//           className="hamburger" 
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle navigation menu"
//         >
//           <span className="hamburger-bar"></span>
//           <span className="hamburger-bar"></span>
//           <span className="hamburger-bar"></span>
//         </button>
        
//         <ul className={isMenuOpen ? 'navList active' : 'navList'}>
//           {navItems.map(item => (
//             <li key={item.id} className="navItem">
//               <button
//                 className={currentPage === item.id ? 'active' : ''}
//                 onClick={() => handleNavClick(item.id)}
//               >
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>
        
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;

import React, { useState } from 'react';
const logo = new URL('../utils/logo.png', import.meta.url).href;
import '../styles/NavigationBar.css'; // Assuming you have a CSS file for styles

const NavigationBar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'signup', label: 'Sign Up' }
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
  };

  return (
    <nav className='navigationBarWrapper'>
      <div className='navigationBarContainer'>
        
        <div className='logoContainer'>
          <img src={logo} alt="Company Logo" className="logoImage" />
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
        
        <ul className={isMenuOpen ? 'navList active' : 'navList'}>
          {navItems.map(item => (
            <li key={item.id} className="navItem">
              <button
                className={`nav-button ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        
      </div>
    </nav>
  );
};

export default NavigationBar;