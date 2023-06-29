import { createContext } from 'react';

const LayoutContext = createContext({
    heroEnd: 0,
    setHeroEnd: () => { }
})

export default LayoutContext;