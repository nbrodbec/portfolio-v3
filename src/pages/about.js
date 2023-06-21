import Hero from '@/components/Hero';
import Row from '@/components/Row';
import Image from 'next/image';
import TextImage from '@/components/Rows/TextImage';
import InlineTextLink from '@/components/InlineTextLink';
import ImageLink from '@/components/ImageLink';
import bitmojiStudy from '../assets/bitmoji_study.png';
import waterloo from '../assets/waterloo_seal.png';
import coops from '../content/coops.json';
import SectionMarker from '@/components/SectionMarker';
import TextImageFull from '@/components/Rows/TextImageFull';
import butterfly from '../assets/butterfly.jpg';
import goalie from '../assets/goalie2.jpg';
import band from '../assets/band.jpg';
import guitar1 from '../assets/guitar1.jpg';
import guitar2 from '../assets/guitar2.jpg';
import bass from '../assets/bass.jpg';

export default function About({ songs, podcasts, playing }) {
  return (
    <div>
      <Hero>
        <h1 className='text-white text-center'>About</h1>
      </Hero>
      <TextImage
        img={bitmojiStudy}
        alt='Bitmoji Studying'
        title='Who am I?'
      >
        <p>
          I am a 20 year-old student from Montreal, Canada, studying Computer Science at the University of Waterloo. I enjoy all things
          tech and pride myself in the quality of my projects; both from the developer and the user perspective.
        </p>
      </TextImage>

      <SectionMarker id='education' />
      <TextImage
        img={waterloo}
        alt='Bitmoji Studying'
        title='My Education'
        imgFirst
        bg='bg-darkWhite'
      >
        <p>
          I am a candidate for a Bachelor's of Computer Science at the University of Waterloo in Waterloo, Ontario.
          I am also part of Waterloo's Co-Op program and am therefore always on the hunt for 4-month internships. Have an
          opportunity that I would be a good fit for? <InlineTextLink href='/contact'>Let me know!</InlineTextLink>
        </p>
        <ul className='font-poppins font-medium text-zinc-500 mt-4'>
          <li><b>Program: </b>Honour's Computer Science, Co-Op</li>
          <li><b>Expected Graduation: </b> April 2026</li>
          <li><b>GPA: </b> 3.9/4.0</li>
        </ul>
      </TextImage>
      <Row bg='bg-primary'>
        <h2 className='text-white mb-4'>Previous Co-Ops</h2>
        <div className='flex flex-wrap flex-col gap-8 md:flex-row'>
          {coops.map(info => (
            <div key={info.company} className='flex flex-row gap-4 items-center'>
              <ImageLink
                src={info.logo}
                alt={info.company}
                href={info.url}
                className='w-16 h-16'
              />
              <div>
                <p className='text-white'>
                  {info.company}
                  <br />
                  <span className='font-thin'>
                    {info.role}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Row>

      <SectionMarker id='interests' />
      <Row>
        <h1>My Interests</h1>
      </Row>
      <TextImageFull
        bg='bg-darkWhite'
        title='Swimming'
        alt='Nicholas swimming butterfly'
        img={butterfly}
        imgFirst
      >
        <p>
          I have been swimming all my life! I swam competitively for 5 years while I was younger
          and began to compete again in CÉGEP.
          <br /><br />
          As an individual sport, competitive swimming transformed me into a self-starter. I could not rely on others
          to improve my performance at swim meets, only my own hard work could do that!
        </p>
      </TextImageFull>
      <TextImageFull
        bg='bg-darkWhite'
        title='Waterpolo'
        alt='Nicholas playing waterpolo'
        img={goalie}
      >
        <p>
          During my hiatus from competitive swimming, I played waterpolo instead.
          <br /> <br />
          As a team sport, waterpolo taught me many things about teamwork that continue to help me in my professional life!
        </p>
      </TextImageFull>
      <TextImageFull
        bg='bg-darkWhite'
        title='Music'
        alt='Nicholas playing guitar'
        img={band}
        imgFirst
      >
        <p>
          I am very passionate about music; both as a listener and as a creator. I have been
          playing guitar since I was 7 years old and began playing the upright bass in high school.
          <br /><br />
          Throughout high school I even played as part of a band. We called ourselves 'Eudisside'.
        </p>
      </TextImageFull>
      <Row>
        <div className='grid grid-cols-1 place-items-center gap-4 md:grid-cols-3'>
          <Image src={guitar1} alt='Guitar' height={300} />
          <Image src={guitar2} alt='Guitar' height={300} />
          <Image src={bass} alt='Guitar' height={300} />
        </div>
      </Row>
      <Row bg='bg-darkWhite'>
        <h1 className=' mb-8'>My Top 5 Songs</h1>
        <div className='flex flex-wrap flex-col gap-8 justify-start md:max-w-[75%] md:flex-row'>
          {songs.map(track => (
            <div key={track.id} className='flex flex-row gap-4 items-center'>
              <ImageLink
                src={track.album.images[0].url}
                alt={track.album.name}
                href={track.preview_url}
                className='w-16 h-16 shadow-lg'
              />
              <div className='max-w-xs'>
                <p className='text-ellipsis'>
                  {track.name}
                  <br />
                  <span className='font-thin'>
                    {track.artists[0].name}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <h1 className=' my-8 text-right'>My Top 5 Podcasts</h1>
        <div className='flex flex-wrap flex-col gap-8 justify-end md:max-w-[75%] md:ml-auto md:flex-row'>
          {podcasts.map(track => (
            <div key={track.id} className='flex flex-row gap-4 items-center'>
              <ImageLink
                src={track.images[0].url}
                alt={track.name}
                href={track.external_urls.spotify}
                className='w-16 h-16 flex-none shadow-lg'
              />
              <div className='max-w-xs'>
                <p className=' text-ellipsis'>
                  {track.name}
                  <br />
                  <span className='font-thin'>
                    {track.publisher}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Row>
      {playing &&
        <Row bg='bg-primary'>
          <h1 className='text-white mb-8 text-center'>Currently Listening To...</h1>
          <div key={playing.id} className='mx-auto flex flex-row gap-4 items-center'>
            <ImageLink
              src={playing.album.images[0].url}
              alt={playing.album.name}
              href={playing.preview_url}
              className='w-32 h-32 flex-none shadow-lg'
            />
            <div className='max-w-xs'>
              <p className='text-white text-2xl text-ellipsis'>
                {playing.name}
                <br />
                <span className='font-thin'>
                  {playing.artists[0].name}
                </span>
              </p>
            </div>
          </div>
        </Row>
      }
    </div>
  );
}

export async function getStaticProps() {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const authOptions = {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=refresh_token&client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}`,
  };

  const spotifyToken = await fetch('https://accounts.spotify.com/api/token', authOptions)
    .then(res => res.json())
    .then(data => data.access_token)

  const options = {
    method: "GET",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + spotifyToken
    }
  }

  const tracks = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5&offset=0', options)
    .then(res => res.json())
    .then(data => data.items)
    .catch(console.log)
  const podcasts = await fetch('https://api.spotify.com/v1/me/shows?limit=5&offset=0', options)
    .then(res => res.json())
    .then(data => data.items.map(item => item.show))
    .catch(console.log)
  const playing = await fetch('https://api.spotify.com/v1/me/player/currently-playing', options)
    .then(res => res.json())
    .then(data => data && data.currently_playing_type == 'track' && data.is_playing ? data.item : null)
    .catch(console.log)

  return {
    props: {
      songs: tracks || [],
      podcasts: podcasts || [],
      playing: playing || null
    },
    revalidate: 60
  }
}