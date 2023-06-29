import Navbar from './Navbar.js';
import Footer from './Footer.js';
import LayoutContext from '@/context/LayoutContext.js';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [heroEnd, setHeroEnd] = useState(0);
  const value = { heroEnd, setHeroEnd };

  return (
    <LayoutContext.Provider value={value}>
      <Navbar />
      <main className='relative drop-shadow-xl z-30'>
        {children}
      </main>
      <Footer />
    </LayoutContext.Provider>
  );
}

export default Layout;