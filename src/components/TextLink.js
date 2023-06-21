import Link from 'next/link';
import { useState } from 'react';

const TextLink = ({ children, href }) => {
    return (
        <Link
            href={href ?? '/'}
            className='relative group'
        >
            <span className='font-poppins font-medium text-white text-lg'>{children}</span>
            <span className='absolute -bottom-1 left-0 h-1 w-0 bg-white transition-all group-hover:w-full' />
        </Link>
    );
}

export default TextLink;