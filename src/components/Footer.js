import Image from 'next/image';
import Row from './Row';
import InlineTextLink from './InlineTextLink.js';
import Button from './Button.js';
import ImageLink from './ImageLink';
import CopyText from './CopyText';
import location from '../assets/location-pin.png';
import key from '../assets/key.png';
import linkedin from '../assets/Linkedin-Mark.svg';
import github from '../assets/GitHub-Mark.svg';
import instagram from '../assets/Instagram-Mark.svg';

const Footer = () => {
  return (
    <>
      <Row bg='bg-secondary'>
        <div className='text-white gap-6 grid grid-cols-1 md:gap-4 md:grid-cols-5'>
          <div className=' space-y-2 md:col-span-2 text-center md:text-left'>
            <h1 className='text-white'>Nicholas Brodbeck</h1>
            <p className='text-white font-semibold'>Software Developer & Computer Science Student</p>
            <h2 className='text-white font-poppins text-sm'>
              &copy; Copyright 2023, Nicholas Brodbeck
            </h2>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-white text-xl mb-2 text-center md:text-left'>Navigation</h1>
            <InlineTextLink color='bg-white' href='/'>&#62; Home</InlineTextLink>
            <InlineTextLink color='bg-white' href='/about'>&#62; About</InlineTextLink>
            <InlineTextLink color='bg-white' href='/projects'>&#62; Projects</InlineTextLink>
          </div>
          <div className='flex flex-col gap-2 items-center md:items-start'>
            <h1 className='text-white text-xl mb-2'>Contact</h1>
            <div className='flex flex-row items-center gap-2'>
              <div className='relative w-4 h-4'>
                <Image src={location} alt='Location pin' className='object-cover' fill />
              </div>
              <p className='text-white font-semibold'>Montreal, Canada</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <div className='relative w-4 h-4'>
                <Image src={key} alt='Location pin' className='object-cover' fill />
              </div>
              <CopyText value={process.env.NEXT_PUBLIC_PGP_KEY}>Public Key</CopyText>
            </div>
            <Button href='/contact'>Get in Touch</Button>
          </div>

          <div className='flex flex-col gap-2 items-center  md:items-start'>
            <h1 className='text-white text-xl mb-2'>Socials</h1>
            <div className='flex flex-row gap-4 items-center'>
              <ImageLink src={linkedin} alt='LinkedIn' href='https://linkedin.com/in/nbrodbeck' className='w-8 h-8 invert brightness-0' />
              <ImageLink src={github} alt='GitHub' href='https://github.com/nbrodbec' className='w-8 h-8 invert brightness-0' />
              <ImageLink src={instagram} alt='GitHub' href='https://instagram.com/nicky_brod' className='w-8 h-8 invert brightness-0' />
            </div>
          </div>
        </div>
      </Row>
    </>
  );
}

export default Footer;