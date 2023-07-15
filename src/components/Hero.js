import { useContext, useEffect, useRef } from 'react';
import Container from './Container.js';
import SectionMarker from './SectionMarker.js';
import LayoutContext from '@/context/LayoutContext.js';

const Hero = ({ children, full }) => {
    const { heroEnd, setHeroEnd } = useContext(LayoutContext);
    const heroEndRef = useRef();

    useEffect(() => {
        if (heroEndRef.current) {
            setHeroEnd(heroEndRef.current.getBoundingClientRect().y);
        }
    }, []);

    return (
        <div className={`sticky top-0 block flex flex-col items-center bg-secondary ${full ? 'min-h-screen' : ''} pt-12`}>
            <Container>
                {children}
            </Container>
            <div className='relative'>
                <span className='absolute -top-16 md:-top-20' ref={heroEndRef} />
            </div>
        </div>
    );
}

export default Hero;