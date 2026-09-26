import Image from "next/image";
import banner from "@/assets/banner.png";
import BannerButton from "./BannerButton";

const Banner = () => {
  return (
    <section className="bg-black px-4 py-8">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-xl border border-[#252A33] bg-[#15171D]">
          <div className="grid min-h-[270px] items-center md:grid-cols-2">
            
            {/* Content */}
            <div className="px-8 py-10 md:px-10">
              <p className="mb-4 text-[9px] font-bold tracking-wide text-[#C2F800]">
                WORKOUT LIBRARY
              </p>

              <h1 className="max-w-xl text-4xl font-extrabold leading-[0.95] text-white md:text-5xl">
                TRAIN WITH INTENT. LOG
                <br />
                EVERY SET.
              </h1>

              <p className="mt-4 max-w-md text-xs leading-5 text-gray-400">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today's plan, and watch the week's work add up.
              </p>

              <div className="mt-5">
                <BannerButton />
              </div>
            </div>

            {/* Banner Image */}
            <div className="relative h-[260px] md:h-[300px]">
              <Image
                src={banner}
                alt="Workout"
                fill
                className="object-contain"
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;