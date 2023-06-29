import { useRouter } from 'next/router';

const Button = ({ children, href, onClick, bg, disabled, ...props }) => {
  const router = useRouter();
  return (
    disabled ?
      <button
        className={'relative group p-3 inline-block drop-shadow-md opacity-75 cursor-default ' + (bg || 'bg-accent')}
        {...props}
      >
        <span className='relative font-poppins font-medium text-white z-20'>{children}</span>
      </button> :

      <button
        className={'pointer-events-auto relative group p-3 inline-block drop-shadow-md ' + (bg || 'bg-accent')}
        onClick={onClick || href && (() => router.push(href))}
        {...props}
      >
        <span className='absolute left-0 top-0 h-full w-0 bg-black opacity-[.15] transition-all group-hover:w-full' />
        <span className='relative font-poppins font-medium text-white z-20'>{children}</span>
      </button>

  );
}

export default Button;