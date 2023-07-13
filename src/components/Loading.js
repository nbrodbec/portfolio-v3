import Hero from "./Hero";
import Row from "./Row";
import Wheel from "./Wheel";

const Loading = () => {
  return (
    <div>
      <Hero full>
        <div className='flex flex-row justify-center my-auto'>
          <Wheel bg='text-secondary' color='fill-white' />
        </div>
      </Hero>
    </div>
  );
}

export default Loading;