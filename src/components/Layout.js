import Navbar from './Navbar.js';
import Footer from './Footer.js';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='relative drop-shadow-xl z-30'>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;