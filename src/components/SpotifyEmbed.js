import { useState } from 'react';
import Wheel from './Wheel';

const SpotifyEmbed = ({ track }) => {
  const [loading, setLoading] = useState(true);
  const Skeleton = () => {
    return (
      <div className='grid place-items-center border-2 border-white h-20 w-full md:w-40 rounded-lg'>
        <Wheel />
      </div>
    );
  };


  return (
    <>
      {loading && <Skeleton />}
      <iframe
        className={'w-full h-20 md:max-w-fit ' + (loading ? 'hidden' : 'block')}
        src={`https://open.spotify.com/embed/${track.type}/${track.id}?utm_source=generator&theme=0`}
        allowFullScreen=''
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='eager'
        onLoad={() => setLoading(false)}
      />
    </>
  );
};

export default SpotifyEmbed;