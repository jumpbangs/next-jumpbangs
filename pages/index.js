import Image from 'next/image';

/**
 *  Home Page
 *
 * @returns @Component
 */
const HomePage = () => {
  return (
    <div>
      <section className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            alt="hero-image"
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl"
            height="400"
            width="260"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
