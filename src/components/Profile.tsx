import { Typewriter } from "react-simple-typewriter";

export const Profile = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">
        <Typewriter
          words={["Hi, I'm Kimzie Torres."]}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          delaySpeed={30000} 
          deleteSpeed={0} 
          loop={false}
        />
      </h1>

      <p className="py-10 -text-sm font-extralight text-justify">
        A passionate developer with a love for building clean, efficient, and
        user-friendly digital experiences. With a strong foundation in web
        development, I enjoy solving complex problems and continuously learning
        to stay ahead in the ever-evolving world of tech. Whether it's front-end
        design or back-end logic, I’m driven by the challenge of turning ideas
        into functional and elegant solutions.
      </p>
    </div>
  );
};
