import Hero from "@/components/Hero";
import Row from "@/components/Row";
import projects from '../content/games.json';
import GameFrame from '@/components/GameFrame.js'
import { useEffect, useState } from "react";
import TextImage from "@/components/Rows/TextImage";
import InlineTextLink from "@/components/InlineTextLink";
import SectionMarker from "@/components/SectionMarker";
import lineup from '../assets/avatar-lineup.png'
import website from '../assets/website.png'
import Button from "@/components/Button";

export default function Projects({ infos, images }) {

    return (
        <div>
            <Hero>
                <h1 className='text-white text-center'>Projects</h1>
            </Hero>
            <SectionMarker id='games' />
            <TextImage title='Games' img={lineup} alt='Lineup of Roblox Avatars'>
                <p>
                    Leveraging the <InlineTextLink href='https://www.roblox.com'>Roblox Platform</InlineTextLink>
                    , I have shipped many games that have seen success.
                </p>
            </TextImage>
            <Row bg='bg-darkWhite'>
                <div className='mx-auto justify-center gap-4 flex flex-row flex-wrap'>
                    {infos.map((info, i) => <GameFrame key={i} info={info} image={images[i]} />)}
                </div>
            </Row>
            <Row bg='bg-highlight' full>
                <div className='grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3'>
                    <div className='grid grid-rows-3 grid-cols-1 py-4'>
                        <h1 className='text-white text-center row-span-2 text-6xl lg:text-7xl'>{projects.length}</h1>
                        <h2 className='text-white text-center font-bold'>PUBLISHED GAMES</h2>
                    </div>
                    <div className='relative grid grid-rows-3 bg-black bg-opacity-10 grid-cols-1 py-4'>
                        <h1 className='text-white text-center row-span-2 text-6xl lg:text-7xl'>
                            {infos ?
                                infos.reduce((tot, info) => tot + info.playing, 0).toLocaleString()
                                : '00'}
                        </h1>
                        <h2 className='text-white text-center font-bold'>CURRENTLY PLAYING</h2>
                    </div>
                    <div className='grid grid-rows-3 grid-cols-1 py-4'>
                        <h1 className='text-white text-center row-span-2 text-6xl lg:text-7xl'>
                            {infos ?
                                Math.round(infos.reduce((tot, info) => tot + info.visits, 0) / 100000) / 10
                                : '00'}M+
                        </h1>
                        <h2 className='text-white text-center font-bold'>TOTAL PLAYS</h2>
                    </div>
                </div>
            </Row>

            <SectionMarker id='websites' />
            <TextImage title='Websites' img={website} alt=''>
                <p>
                    I design my websites according to industry best practices, with a focus on an exceptional user experience.
                </p>
                <br />
                <p>
                    Using the latest technologies like <InlineTextLink href='https://react.dev'>React</InlineTextLink> and <InlineTextLink href='https://tailwindcss.com'>TailwindCSS</InlineTextLink>
                    , my websites are made to be entirely responsive, dynamic
                    and visually appealing.
                </p>
            </TextImage>
            <Row bg='bg-darkWhite'>
                <h2 className='text-center font-semibold text-zinc-500'>Website Examples Coming Soon...</h2>
            </Row>
            <Row>
                <div className='text-center space-y-4'>
                    <h1>Interested in working with me?</h1>
                    <p>I am always on the lookout for new projects or internship opportunities. Let me know!</p>
                    <Button bg='bg-highlight' href='/contact'>Contact Me</Button>
                </div>
            </Row>
        </div>
    );
}

export async function getServerSideProps() {
    const ids = projects.map(project => project.universeId)// projects.map(project => project.universeId);
    const url = 'https://games.roblox.com/v1/games?' + new URLSearchParams({ universeIds: ids })
    const imgUrl = 'https://thumbnails.roblox.com/v1/games/icons?returnPolicy=PlaceHolder&size=256x256&format=Png&isCircular=false&' + new URLSearchParams({ universeIds: ids })

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const infos = await fetch(url, options)
        .then(res => res.json())
        .then(info => info.data)
        .catch(console.log);

    const imgs = await fetch(imgUrl, options)
        .then(res => res.json())
        .then(data => data.data.map(v => v.imageUrl))
        .catch(console.log)

    return {
        props: {
            infos: infos || null,
            images: imgs || []
        },
        revalidate: 60
    }
}