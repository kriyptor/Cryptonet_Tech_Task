
import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  {/* Toggle Switch */}
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title */}
        <div>
        <p className="text-white text-lg font-bold">Made by <span className="text-violet-600">Shivanshu Kashyap</span></p>
        </div>

        {/* Contact Section */}
        <div className="relative inline-block text-left">
          <button
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none font-bold"
            onClick={toggleDropdown}
          >
            Contacts
          </button>
          {isDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div className="py-1" role="menuitem" aria-orientation="vertical" tabIndex="-1" id="menu-item-0">
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100" tabIndex="-1" id="menu-item-0">
                  kashyapshivanshu27@gmail.com
                </p>
              </div>
              <div className="py-1" role="menuitem" aria-orientation="vertical" tabIndex="-1" id="menu-item-1">
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100" tabIndex="-1" id="menu-item-1">
                  +91872697870
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
