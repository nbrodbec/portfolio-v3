import Hero from "@/components/Hero";
import Row from "@/components/Row";
import projects from '../content/games.json';
import { useEffect, useState } from "react";

export default function Projects({ infos }) {

    return (
        <div>
            <Hero>
                <h1 className='text-white text-center'>Projects</h1>
            </Hero>
            <Row>
                <h1>Games</h1>
                <div className='grid place-items-evenly grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

                </div>
            </Row>
            <Row bg='bg-highlight' full>
                <div className='grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3'>
                    <div className='grid grid-rows-3 grid-cols-1 py-4'>
                        <h1 className='text-white text-center row-span-2 text-6xl lg:text-7xl'>{projects.length}</h1>
                        <h2 className='text-white text-center font-bold'>PUBLISHED GAMES</h2>
                    </div>
                    <div className='grid grid-rows-3 grid-cols-1 bg-[#3fb0bf] py-4'>
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
        </div>
    );
}

export async function getStaticProps() {
    const ids = projects.map(project => project.universeId)// projects.map(project => project.universeId);
    const url = 'https://games.roblox.com/v1/games?' + new URLSearchParams({ universeIds: ids })
    console.log(url)
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

    return {
        props: {
            infos: infos || null
        },
        revalidate: 60
    }
}