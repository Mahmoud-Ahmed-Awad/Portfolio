import Typewriter from "typewriter-effect";
import { FaArrowDown } from "react-icons/fa6";
import Profile from "../../Assets/Profile.jpg";

function Landing() {
  function sectionScroll() {
    window.scrollTo({
      behavior: "smooth",
      top: window.innerHeight,
    });
  }
  return (
    <>
      <section className="relative min-h-[calc(100vh-60px)] p-10 pb-20 bg-gradient-to-tr from-slate-950 to-slate-700 flex flex-wrap justify-center items-center gap-20 font-bold">
        <div className="text-5xl min-h-[276px] sm:h-auto text-white">
          Hello, I'm <span className="text-slate-400">Mahmoud Ahmed.</span>
          <br />
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Full Stack Web Developer.").start();
            }}
            options={{
              cursorClassName: "hidden",
              wrapperClassName:
                "text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 via-lime-300 to-green-500",
              delay: 50,
            }}
          />
          <div className="min-h-24 sm:h-auto">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("MERN Stack Developer.").start();
              }}
              options={{
                cursorClassName: "hidden",
                wrapperClassName:
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500",
                delay: 66,
              }}
            />
          </div>
        </div>
        <div className="text-5xl text-white relative">
          <div className="w-72 h-full bg-cyan-400 absolute"></div>
          <img src={Profile} alt="" className="w-72 rotate-6" />
        </div>
        <div
          className="animate-bounce w-8 h-8 text-white rounded-full bg-cyan-500 flex items-center justify-center absolute bottom-5 text-xl cursor-pointer left-1/2 -translate-x-1/2"
          onClick={sectionScroll}
        >
          <FaArrowDown />
        </div>
      </section>
    </>
  );
}

export default Landing;
