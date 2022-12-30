import Categories from './Categories';
import SliderHome from './SliderHome';

const Hero = () => {
  return (
    <section className="home">
      <div className="container d_flex">
        <Categories />
        <SliderHome />
      </div>
    </section>
  );
};

export default Hero;
