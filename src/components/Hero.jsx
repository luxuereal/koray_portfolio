// import content
import { useEffect } from "react";
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      {/* <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        first col
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        sec col
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div> */}
      <div className="h-screen object-contain flex flex-col justify-center items-center shadow-3xl gap-6">
        <video
          className="object-cover absolute z-[-1] shadow-3xl min-h-screen"
          src={hero.video}
          autoPlay
          loop
          muted
        />
        <h1 className="text-white text-[70px] leading-[70px] lg:text-[100px] lg:leading-[100px] text-center">
          Koray{" "}
          <span className="text-dark_primary text-teal-300 text-[70px] leading-[70px] lg:text-[100px] lg:leading-[100px] text-[100px]">
            Ozay
          </span>
        </h1>
        <p className="m-[9px] text-white text-2xl lg:text-base text-center">
          Web / Mobile Developer | UX / UI Designer
        </p>
      </div>
    </section>
  );
};

export default Hero;
