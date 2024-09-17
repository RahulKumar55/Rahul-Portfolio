import { useState } from 'react';
import Link from 'next/link';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 z-50 w-full flex justify-between items-center bg-blackCustom text-goldCustom p-4">
        <Link href="/" onClick={closeNav}>
          <div className="text-xl font-bold ml-0 md:ml-10">
            {/* Your Name on the left */}
            Rahul Kumar
          </div>
        </Link>
        {/* Hamburger Button on the right */}
        <div
          className="cursor-pointer text-3xl mr-0 md:mr-10"
          onClick={toggleNav}
        >
          &#9776;
        </div>
      </div>

      {/* Side Nav */}
      <div
        className={`fixed top-0 right-0 z-50 h-full bg-greyCustom text-goldCustom w-64 p-5 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="text-2xl mb-6"
          onClick={toggleNav}
        >
          &#10005; {/* Close Button */}
        </button>
        <nav className="flex flex-col space-y-4">
          <Link href="#about" onClick={toggleNav}>About</Link>
          <Link href="#skills" onClick={toggleNav}>Skills</Link>
          <Link href="#projects" onClick={toggleNav}>Projects</Link>
          <Link href="#contacts" onClick={toggleNav}>Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
