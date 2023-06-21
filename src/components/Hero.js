import Container from './Container.js';

const Hero = ({ children, full }) => {
    return (
      <div className={`sticky top-0 block flex flex-col items-center bg-secondary ${full ? 'min-h-screen' : ''} pt-12`}>
          <Container>
              {children}
          </Container>
      </div> 
    );
}

export default Hero;