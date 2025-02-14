import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SocialIcons from '../SocialIcons/SocialIcons';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to handle navigation clicks
  const handleNavClick = () => {
    setIsOpen(false); // Close mobile menu after clicking
  };

  // Array of navigation items for DRY code
  const navItems = [
    { path: '/smart', label: 'Smart Contracts' },
    { path: '/services', label: 'Services' },
    { path: '/solution', label: 'Solutions' },
    { path: '/roadmap', label: 'Roadmap' },
  ];

  return (
    <div className='navbar bg-black-50 min-h-[3.5rem] w-full fixed flex flex-col md:flex-row justify-between items-center px-4 md:px-8 sm:mb-48 mb-28 z-50'>
      <nav className="nav-menu flex flex-row justify-between bg-black items-center w-full py-4">
        <h1 className="font-medium text-2xl text-white">
          <Link to="/" className="text-white" onClick={handleNavClick}>BlitzChain</Link>
        </h1>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className='hidden md:flex items-center space-x-8 list-none px-4'>
          {navItems.map((item) => (
            <li key={item.path} className="hover:text-amber-600 cursor-pointer py-2 transition-colors relative">
              <Link 
                to={item.path} 
                className={`text-white ${location.pathname === item.path ? 'text-amber-600' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <SocialIcons />
        </div>
      </nav>

      {/* Mobile menu */}
      <div 
        className={`${isOpen ? 'flex' : 'hidden'} w-full md:hidden absolute top-full left-0 bg-black`}
        style={{ maxHeight: 'calc(100vh - 3.5rem)', overflowY: 'auto' }}
      >
        <ul className='flex flex-col w-full space-y-4 py-4 bg-black text-white'>
          {navItems.map((item) => (
            <li key={item.path} className="hover:text-amber-600 cursor-pointer py-2 transition-colors text-center relative">
              <Link 
                to={item.path} 
                className={`text-white block w-full h-full ${location.pathname === item.path ? 'text-amber-600' : ''}`}
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="py-2 text-center">
            <SocialIcons />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;