import Image from 'next/image';
import Row from '../Row';


const TextImage = ({ children, title, img, alt, imgFirst, bg }) => {
  const contents = [

  ];

  if (imgFirst) contents.reverse();

  return (
    <Row bg={bg}>
      <div className='grid grid-cols-1 gap-4 md:grid-rows-1 md:grid-cols-4'>
        <div className={'flex flex-col md:col-span-3 order-1 my-auto ' + (imgFirst ? 'md:order-2' : '')}>
          <h1 className='mb-4'>{title}</h1>
          {children}
        </div>
        <Image
          src={img}
          alt={alt}
          className={'object-contain min-w-full min-h-full order-2 ' + (imgFirst ? 'md:order-1' : '')}
        />
      </div>
    </Row>
  );
}

export default TextImage;