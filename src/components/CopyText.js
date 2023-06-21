import { useState } from 'react';

const CopyText = ({ children, value }) => {
  const [ copied, setCopied ] = useState(false);

  return (
    <div 
      className='cursor-pointer'
      onClick={() => {
          setCopied(true);
          navigator.clipboard.writeText(value);
      }}
    >
      <p className='text-white font-semibold'>{copied ? 'Copied!' : children}</p>
    </div>
  );
}

export default CopyText;