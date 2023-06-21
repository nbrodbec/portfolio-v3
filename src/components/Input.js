const Input = ({ children, resizeable, ...props }) => {
  return (
    resizeable ?
      <textarea
        placeholder={children}
        rows={4}
        className='font-poppins p-2 text-primary placeholder-primary'
        {...props}
      /> :
      <input
        placeholder={children}
        className='font-poppins p-2 text-primary placeholder-primary'
        {...props}
      />
  );
}

export default Input;