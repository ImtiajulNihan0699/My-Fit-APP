import Image from "next/image";
import bannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="w-full px-4 py-8 bg-black">
      <div className="container mx-auto w-full min-h-[275px] rounded-xl border border-gray-800 bg-[#15171D] flex flex-col md:flex-row items-center justify-between px-8 md:px-10 py-8 overflow-hidden">
        {/* Left side */}
        <div className="max-w-xl">
          <p className="text-[#C2F800] text-[9px] font-semibold tracking-wide mb-4">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-white text-4xl md:text-4xl font-black leading-[0.9] tracking-tight max-w-lg">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="text-gray-400 text-xs md:text-sm leading-5 mt-4 max-w-md">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br />
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="mt-5 bg-[#C2F800] text-black text-[9px] font-bold px-4 py-2.5 rounded-md hover:bg-[#b5e800] transition">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Right side - Banner image */}
        <div className="flex items-center justify-center mt-6 md:mt-0">
          <Image
            src={bannerImage}
            alt="Workout illustration"
            width={300}
            height={260}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
