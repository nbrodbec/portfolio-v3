import Link from 'next/link';

const InlineTextLink = ({ children, href, color }) => {
    color = color || 'bg-zinc-500'
    return (
        <Link
            href={href ?? '/'}
            className='relative group inline-block'
        >
            <span className='font-poppins font-semibold'>{children}</span>
            <span className={`absolute -bottom-0.5 left-0 h-px w-full ${color} transition-all group-hover:h-1`} />
        </Link>
    );
}

export default InlineTextLink;