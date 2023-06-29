import TextLink from './TextLink.js';
import Button from './Button.js';
import { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu.js';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const y = Math.ceil(window.scrollY);
      if (y < window.innerHeight) {
        setVisible(false)
      } else {
        setVisible(true)
      }
    })
  }, []);

  return (
    <div className={`fixed w-full grid place-items-center z-50 bg-secondary ${open && 'shadow-xl'}`}>
      <nav className='grid grid-cols-2 max-w-screen-xl items-center w-full mx-auto p-4'>
        <h1
          className={`col-span-1 leading-none inline font-poppins text-white font-semibold text-lg md:text-2xl lg:text-3xl leading-none transition-all ${visible || open ? 'opacity-100' : 'opacity-0'}`}
        >
          Nicholas Brodbeck
        </h1>

        {/* Desktop View */}
        <div className='hidden flex-row justify-end items-center gap-6 md:flex'>
          <TextLink href='/'>Home</TextLink>
          <TextLink href='/about'>About</TextLink>
          <TextLink href='/projects'>Projects</TextLink>
          <Button href='/contact'>Contact</Button>
        </div>

        {/* Mobile View */}
        <HamburgerMenu state={open} setState={setOpen}>
          <TextLink href='/'>Home</TextLink>
          <TextLink href='/about'>About</TextLink>
          <TextLink href='/projects'>Projects</TextLink>
          <Button href='/contact'>Contact</Button>
        </HamburgerMenu>
      </nav>
    </div>
  );
}

export default Navbar;