import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Adjust paths as necessary
import logo1 from '../assets/Lumii_20230726_143832371.jpg'; // Adjust paths as necessary
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { FaShoppingCart } from 'react-icons/fa'; // Importing cart icon from react-icons
import './Nav.css'; // Import the external CSS

export function Header_Nav() {
  // State to track active link and cart item count
  const [activeLink, setActiveLink] = useState(''); // Initially, no link is active
  const [cartCount, setCartCount] = useState(0); // Cart item count

  // Function to handle link click
  const handleLinkClick = (section) => {
    setActiveLink(section);  // Set the clicked link as active
  };

  return (
    <Navbar fluid rounded className="bg-teal-500 shadow-lg">
      {/* Navbar Brand Section */}
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="PP Cake Shop Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white dark:text-white">
          PP Cake Shop
        </span>
      </Navbar.Brand>

      {/* Dropdown Section */}
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={logo1} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      {/* Navbar Links */}
      <Navbar.Collapse>
        <div className="flex space-x-4">
          <Navbar.Link
            href="Home"
            onClick={() => handleLinkClick('home')}
            className={`navbar-link ${activeLink === 'home' ? 'active' : ''}`}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="#"
            onClick={() => handleLinkClick('Cart')}
            className={`navbar-link ${activeLink === 'Cart' ? 'active' : ''}`}
          >
            {/* Cakes
          </Navbar.Link>
          <Navbar.Link
            href="#"
            onClick={() => handleLinkClick('about')}
            className={`navbar-link ${activeLink === 'about' ? 'active' : ''}`}
          > */}
            About Us
          </Navbar.Link>
          <Navbar.Link
            href="Abouts"
            onClick={() => handleLinkClick('contact')}
            className={`navbar-link ${activeLink === 'contact' ? 'active' : ''}`}
          >
            Contact Us
          </Navbar.Link>
          {/* Cart Section with Icon and Notification Counter */}
          <Navbar.Link
            href="#"
            onClick={() => handleLinkClick('cart')}
            className={`navbar-link ${activeLink === 'cart' ? 'active' : ''}`}
          >
            <div className="flex items-center">
              <FaShoppingCart className="text-black text-lg mr-2" /> {/* Cart icon in front */}
              <span className="text-black text-sm">
                Cart ({cartCount > 0 ? cartCount : '0'})
              </span>
            </div>
          </Navbar.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
