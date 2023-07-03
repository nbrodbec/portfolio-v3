import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';
import TextLink from './TextLink';

const GameFrame = ({ info, image }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className='group/frame relative shadow-lg overflow-hidden'
      onClick={() => setSelected(!selected)}
    >
      <Image
        src={image}
        alt={info.name}
        width='256'
        height='256'
      />
      <div
        className={`p-2 flex flex-col justify-between gap-4 overflow-hidden text-center 
                w-full absolute bg-primary transition-all  pointer-events-none
                 group-hover/frame:bottom-0 ${selected ? 'bottom-0' : '-bottom-full'}`}
      >
        <h2 className='text-white'>{info.name}</h2>
        <Button bg='bg-green-500' href={`https://www.roblox.com/games/${info.rootPlaceId}/Game`}>Play</Button>
        <p className='text-white font-normal text-center'>
          <span className='font-semibold'>{info.playing.toLocaleString()}</span> Online<br />
          <span className='font-semibold'>{info.visits.toLocaleString()}</span> Plays<br />
          <span className='font-semibold'>{info.favoritedCount.toLocaleString()}</span> Favourites
        </p>
      </div>
    </div >
  );
}

export default GameFrame;