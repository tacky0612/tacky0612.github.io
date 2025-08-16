import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../ui/Button/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="w-full shadow-md fixed top-0 z-50 bg-sky-400">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold">
            <Link to="/" className="text-gray-900 hover:text-gray-700">
              tacky0612.github.io
            </Link>
          </h1>

          <Button onClick={toggleMenu} variant="ghost" size="sm" className="md:hidden !p-2">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </Button>

          <div
            className={`md:flex md:items-center md:space-x-8 ${isOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
              <li>
                <a
                  href="#profile"
                  onClick={(e) => handleSmoothScroll(e, '#profile')}
                  className="block py-2 md:py-0 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleSmoothScroll(e, '#skills')}
                  className="block py-2 md:py-0 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#links"
                  onClick={(e) => handleSmoothScroll(e, '#links')}
                  className="block py-2 md:py-0 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  Links
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
