import Image from 'next/image';
import Hero from '../components/Hero.js';
import Button from '../components/Button.js';
import InlineTextLink from '../components/InlineTextLink.js';
import TextImageFull from '@/components/Rows/TextImageFull.js';
import Row from '@/components/Row.js';
import ImageCell from '@/components/ImageCell.js';
import bitmoji from '../assets/bitmoji.png';
import bitmojiMobile from '../assets/bitmoji_mobile.png';
import codeBlock from '../assets/codeblock.png';
import circuit from '../assets/circuit.jpg';
import programmer from '../assets/programmer.png';
import student from '../assets/graduated.png';
import videogame from '../assets/console.png';
import guitar from '../assets/guitar.png';

export default function Home() {
  return (
    <div>
      <Hero full>
        <div className='grid md:grid-cols-3 flex-1'>
          <div className='flex flex-col gap-4 justify-center text-center md:text-left md:col-span-2'>
            <h1 className='font-poppins text-6xl font-bold text-white md:text-8xl lg:text-9xl'>Nicholas Brodbeck</h1>
            <h2 className='font-poppins text-white text-2xl md:text-4xl'>Software Developer & Computer Science Student</h2>
            <div className='mt-4'>
              <Button href='/contact'>Contact Me</Button>
            </div>
            <div className='shrink flex flex-col place-items-center mx-6 md:hidden'>
              <Image
                className='object-scale-down'
                src={bitmojiMobile}
                alt="Nicholas Brodbeck's Bitmoji"
              />
            </div>
          </div>
          <div className='hidden relative md:block'>
            <Image
              className='absolute bottom-0 right-0 -mb-12'
              src={bitmoji}
              alt="Nicholas Brodbeck's Bitmoji"
            />
          </div>
        </div>
      </Hero>
      <TextImageFull
        title='What I do.'
        alt='Codeblock'
        img={codeBlock}
      >
        <p>
          I have been involved with: full stack web apps, video games, machine learning R&D
          and embedded programming with Arduino and Raspberry Pi.
          <br /><br />
          <InlineTextLink href='/projects'>Check out my work!</InlineTextLink>
        </p>
      </TextImageFull>
      <TextImageFull
        title='What I know.'
        alt='Matrix effect'
        img={circuit}
        imgFirst
      >
        <p>
          Languages I have worked with include JavaScript, Python, Lua, Java, C, SQL, HTML and CSS.
          <br /><br />
          Tools & Frameworks I have used include React.js, Node.js and Express.js, TailwindCSS, MongoDB and Git.
        </p>
      </TextImageFull>
      <Row bg='bg-darkWhite'>
        <h1 className='mb-8 text-center'>Who I am.</h1>
        <div className='grid grid-rows-4 gap-8 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4'>
          <ImageCell
            title='Web Developer'
            src={programmer}
            alt='Computer'
            href='/projects'
            prompt='My Websites'
          >
            <p>Creating beautiful responsive websites with great UX</p>

          </ImageCell>
          <ImageCell
            title='Game Developer'
            src={videogame}
            alt='Video Game Controller'
            href='/projects'
            prompt='My Games'
          >
            <p>Designing and developing video games that attract millions of users</p>

          </ImageCell>
          <ImageCell
            title='Student'
            src={student}
            alt='Student'
            href='/about#education'
            prompt='My Education'
          >
            <p>Computer Science Major at the University of Waterloo</p>

          </ImageCell>
          <ImageCell
            title='Musician'
            src={guitar}
            alt='Guitar'
            href='/about#interests'
            prompt='My Interests'
          >
            <p>Avid music enthusiast, guitarist and bassist</p>

          </ImageCell>
        </div>
      </Row>

      <Row>
        <div className='text-center space-y-4'>
          <h1>Interested in working with me?</h1>
          <p>I am always on the lookout for new projects or internship opportunities. Let me know!</p>
          <Button bg='bg-highlight' href='/contact'>Contact Me</Button>
        </div>
      </Row>
    </div>
  )
}
