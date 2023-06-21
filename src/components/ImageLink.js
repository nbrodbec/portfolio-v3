import Link from 'next/link';
import Image from 'next/image';

const ImageLink = ({ href, src, alt, className }) => {
    return (
        <Link href={href} className={'relative inline-block ' + className}>
            <Image src={src} alt={alt} className='object-contain' fill />
        </Link>
    );
}

export default ImageLink;