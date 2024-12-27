import React, { useState } from 'react';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BookDemoButton from './BookDemoButton';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'AI Voice Agents', path: '/services/voice-agents' },
    { name: 'Custom AI Solutions', path: '/services/custom-ai-solutions' },
    { name: 'Workflow Automation', path: '/services/workflow-automation' },
    { name: 'AI Marketing Automation', path: '/services/marketing-automation' },
  ];

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '#', hasDropdown: true },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '#') {
      return services.some(service => location.pathname === service.path);
    }
    return location.pathname === path;
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            GENINDO
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {menuItems.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    onBlur={() => setTimeout(() => setIsServicesOpen(false), 200)}
                    className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-colors hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-800 ${
                      isActive(item.path) ? 'text-purple-600 bg-purple-50 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-200'
                    }`}
                    aria-expanded={isServicesOpen}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-lg shadow-lg py-2 border border-purple-500/10"
                      role="menu"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className={`block px-4 py-2 text-sm transition-colors hover:bg-purple-50 dark:hover:bg-gray-800 ${
                            isActive(service.path) ? 'text-purple-600 bg-purple-50 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-200'
                          }`}
                          role="menuitem"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-800 ${
                    isActive(item.path) ? 'text-purple-600 bg-purple-50 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-200'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <BookDemoButton className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:scale-105 transition-all" />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 px-4 py-4 shadow-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              !item.hasDropdown ? (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-800 ${
                    isActive(item.path) ? 'text-purple-600 bg-purple-50 dark:bg-gray-800' : 'text-gray-700 dark:text-gray-200'
                  }`}
                >
                  {item.name}
                </Link>
              ) : null
            ))}
            {/* Mobile Services Menu */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200 px-3 py-2">Services</p>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-sm rounded-lg transition-colors hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-800 ${
                    isActive(service.path) ? 'text-purple-600 bg-purple-50 dark:bg-gray-800' : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </nav>
          <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <BookDemoButton className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:scale-105 transition-all" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;