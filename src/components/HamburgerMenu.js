
const Hamburger = ({ children, state, setState }) => {
  const isOpen = state;
  const setIsOpen = setState;

  return (
    <>
      <div className='ml-auto md:hidden' onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ?
          <div className='space-y-2'>
            <span className='block w-8 h-1 bg-white' />
            <span className='block w-8 h-1 bg-white' />
            <span className='block w-8 h-1 bg-white' />
          </div> :
          <div className='w-8 h-7 relative flex flex-col justify-center'>
            <span className='absolute origin-center block w-full h-1 bg-white rotate-45' />
            <span className='absolute origin-center block w-full h-1 bg-white -rotate-45' />
          </div>
        }
      </div>
      <div className='col-span-2'>
        {
          isOpen &&
          <div className='mt-4 w-full flex flex-col block gap-2'>
            {children}
          </div>
        }
      </div>
    </>
  );
}

export default Hamburger;