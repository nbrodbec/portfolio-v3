import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';
import TextLink from './TextLink';

const GameFrame = ({ info, image }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className='relative shadow-lg overflow-hidden'
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
    >
      <Image
        src={image}
        alt={info.name}
        width='256'
        height='256'
      />
      <div
        className={`p-2 flex flex-col justify-between gap-2 overflow-hidden text-center 
                w-full absolute bg-primary transition-all h-full pointer-events-none ${selected ? 'top-0' : 'top-full'}`}
      >
        <h2 className='text-white'>{info.name}</h2>
        <div className='text-white text-xl text-left grid grid-cols-2 gap-x-2'>
          <h3 className='font-semibold text-right'>Live Players:</h3>
          <h3>{info.playing.toLocaleString()}</h3>

          <h3 className='font-semibold text-right'>Total Plays:</h3>
          <h3>{info.visits.toLocaleString()}</h3>

          <h3 className='font-semibold text-right'>Favourites:</h3>
          <h3>{info.favoritedCount.toLocaleString()}</h3>
        </div>
        <Button bg='bg-green-500' href={`https://www.roblox.com/games/${info.rootPlaceId}/Game`}>Play</Button>
      </div>
    </div >
  );
}

export default GameFrame;