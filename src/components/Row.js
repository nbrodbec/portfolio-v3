import Container from './Container.js';

const Row = ({ children, className, bg, full }) => {
    return (
        <div className={'z-10 relative flex flex-col items-center ' + (bg || 'bg-white') + ' ' + (className ? className : '')}>
            <Container full={full}>
                {children}
            </Container>
        </div>
    );
}

export default Row;