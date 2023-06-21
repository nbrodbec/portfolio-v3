const SectionMarker = ({ id }) => {
    return (
        <div className='relative'>
            <span className='absolute -top-16 md:-top-20' id={id} />
        </div>
    );
}

export default SectionMarker;