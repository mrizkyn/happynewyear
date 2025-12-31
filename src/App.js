import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage] = useState([
    "Happy New Year 2026!",
    "Wishing You Success!",
    "Cheers to New Beginnings!",
  ]);

  const particleInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <span className="text-6xl font-black text-yellow-400 drop-shadow-lg animate-bounce">
          THE TIME IS NOW!
        </span>
      );
    } else {
      return (
        <div className="flex gap-4 md:gap-8 text-white">
          <div className="flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 w-20 md:w-28 shadow-xl">
              <span className="text-3xl md:text-5xl font-bold">{days}</span>
            </div>
            <span className="text-xs uppercase mt-2 tracking-widest opacity-70">
              Days
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 w-20 md:w-28 shadow-xl">
              <span className="text-3xl md:text-5xl font-bold">{hours}</span>
            </div>
            <span className="text-xs uppercase mt-2 tracking-widest opacity-70">
              Hours
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 w-20 md:w-28 shadow-xl">
              <span className="text-3xl md:text-5xl font-bold">{minutes}</span>
            </div>
            <span className="text-xs uppercase mt-2 tracking-widest opacity-70">
              Minutes
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 w-20 md:w-28 shadow-xl">
              <span className="text-3xl md:text-5xl font-bold">{seconds}</span>
            </div>
            <span className="text-xs uppercase mt-2 tracking-widest opacity-70">
              Seconds
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 overflow-hidden">
      <Particles
        init={particleInitialization}
        options={{
          preset: "fireworks",
          background: {
            color: "#000",
          },
        }}
      />

      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60 pointer-events-none" />

      <div className="relative z-50 flex flex-col justify-center items-center min-h-screen px-4 text-center">
        <h1 className="mb-8 h-20">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 text-5xl md:text-7xl font-extrabold tracking-tighter italic">
            <Typewriter
              words={newYearMessage}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <div className="mt-4 transform hover:scale-105 transition-transform duration-300">
          <Countdown
            date={new Date("January 1, 2026 00:00:00")}
            renderer={renderer}
          />
        </div>

        <p className="absolute bottom-10 text-white/30 text-sm tracking-[0.3em] uppercase">
          Created By &bull;{" "}
          <a
            href="https://github.com/mrizkyn"
            target="_blank"
            rel="noopener noreferrer"
          >
            MRizkyn
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
