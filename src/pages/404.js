import Image from 'next/image';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import bitmoji_404 from '../assets/bitmoji_404.png';
import bitmoji_404_mobile from '../assets/bitmoji_404_mobile.png';

export default function errorPage() {
  return (
    <div>
      <Hero full>
        <div className='grid md:grid-cols-3 flex-1'>
          <div className='flex flex-col gap-4 justify-center text-center md:text-left md:col-span-2'>
            <h1 className='font-poppins text-6xl font-bold text-white md:text-8xl lg:text-9xl'>404</h1>
            <h2 className='font-poppins text-white text-2xl md:text-4xl'>Requested Page Not Found</h2>
            <div className='mt-4'>
              <Button href='/'>Go Back Home</Button>
            </div>
            <div className='shrink flex flex-col place-items-center mx-6 md:hidden'>
              <Image
                className='object-scale-down'
                src={bitmoji_404_mobile}
                alt="Nicholas Brodbeck's Bitmoji"
              />
            </div>
          </div>
          <div className='hidden relative md:block'>
            <Image
              className='absolute bottom-0 right-0 -mb-12'
              src={bitmoji_404}
              alt="Nicholas Brodbeck's Bitmoji"
            />
          </div>
        </div>
      </Hero>
    </div>
  );
}