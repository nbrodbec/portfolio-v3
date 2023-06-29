import Image from 'next/image';
import Row from '../Row';


const TextImageFull = ({ children, title, img, alt, imgFirst, bg }) => {
  return (
    <Row full bg={bg}>
      <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1'>
        <div className={'px-4 py-12 my-auto max-w-screen-sm w-full order-1 ' +
          (imgFirst ? 'mr-auto md:order-2' : 'ml-auto')}>
          <h1 className='mb-4'>{title}</h1>
          {children}
        </div>
        <div className={'order-2 relative w-full h-full ' + (imgFirst && 'md:order-1')}>
          <Image
            src={img}
            alt={alt}
            fill
            className={'object-cover'}
          />
        </div>
      </div>
    </Row>
  );
}

export default TextImageFull;