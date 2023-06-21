import Image from "next/image";
import InlineTextLink from "./InlineTextLink";

const ImageCell = ({ children, title, src, alt, href, prompt }) => {
  return (
    <div className=' shadow-md p-4 flex flex-col text-center items-center bg-white'>
      <Image src={src} alt={alt} />
      <div className='grow flex flex-col mt-2 space-y-2'>
        <h2>{title}</h2>
        {children}
        {href &&
          <div className='text-primary grow flex flex-col mx-auto justify-end'>
            <InlineTextLink href={href} color='bg-primary'>{prompt}</InlineTextLink>
          </div>
        }
      </div>
    </div>
  );
}

export default ImageCell;