const Loading = () => {
  return (
    <div className="min-h-screen bg-black">

      {/* ================= Banner Skeleton ================= */}
      <section className="w-full px-4 py-8 bg-black">
        <div className="w-full min-h-[275px] rounded-xl border border-gray-800 bg-[#15171D] flex flex-col md:flex-row items-center justify-between px-8 md:px-10 py-8 overflow-hidden animate-pulse">

          {/* Left side */}
          <div className="w-full md:max-w-xl">

            {/* Small heading */}
            <div className="h-3 w-28 bg-gray-800 rounded mb-5"></div>

            {/* Main heading */}
            <div className="space-y-2">
              <div className="h-10 w-80 bg-gray-800 rounded"></div>
              <div className="h-10 w-64 bg-gray-800 rounded"></div>
            </div>

            {/* Description */}
            <div className="space-y-2 mt-5">
              <div className="h-3 w-full max-w-md bg-gray-800 rounded"></div>
              <div className="h-3 w-5/6 max-w-md bg-gray-800 rounded"></div>
            </div>

            {/* Button */}
            <div className="h-9 w-32 bg-gray-800 rounded-md mt-5"></div>
          </div>

          {/* Right side - Image skeleton */}
          <div className="mt-6 md:mt-0">
            <div className="w-[300px] h-[220px] bg-gray-800 rounded-lg"></div>
          </div>

        </div>
      </section>


      {/* ================= Workout List Skeleton ================= */}
      <section className="w-full px-4 pb-8 bg-black">

        {/* Section heading */}
        <div className="flex items-center justify-between mb-6 animate-pulse">
          <div>
            <div className="h-7 w-48 bg-gray-800 rounded"></div>
            <div className="h-3 w-64 bg-gray-800 rounded mt-2"></div>
          </div>

          {/* Optional filter/search skeleton */}
          <div className="h-9 w-24 bg-gray-800 rounded-md"></div>
        </div>


        {/* Exercise cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">

          {/* Card 1 */}
          <div className="flex flex-col bg-[#15171c] rounded-xl overflow-hidden border border-gray-800">
            <div className="w-full h-[300px] bg-gray-800"></div>

            <div className="p-4">

              {/* Muscle groups */}
              <div className="flex gap-2 mb-3">
                <div className="h-5 w-16 bg-gray-800 rounded-full"></div>
                <div className="h-5 w-20 bg-gray-800 rounded-full"></div>
              </div>

              {/* Name */}
              <div className="h-6 w-3/4 bg-gray-800 rounded"></div>

              {/* Equipment */}
              <div className="h-4 w-1/3 bg-gray-800 rounded mt-2"></div>

              {/* Bottom information */}
              <div className="flex gap-4 mt-5">
                <div className="h-4 w-16 bg-gray-800 rounded"></div>
                <div className="h-4 w-20 bg-gray-800 rounded"></div>
                <div className="h-4 w-12 bg-gray-800 rounded"></div>
              </div>

            </div>
          </div>


          {/* Card 2 */}
          <div className="flex flex-col bg-[#15171c] rounded-xl overflow-hidden border border-gray-800">
            <div className="w-full h-[300px] bg-gray-800"></div>

            <div className="p-4">
              <div className="flex gap-2 mb-3">
                <div className="h-5 w-20 bg-gray-800 rounded-full"></div>
                <div className="h-5 w-16 bg-gray-800 rounded-full"></div>
              </div>

              <div className="h-6 w-2/3 bg-gray-800 rounded"></div>

              <div className="h-4 w-1/3 bg-gray-800 rounded mt-2"></div>

              <div className="flex gap-4 mt-5">
                <div className="h-4 w-16 bg-gray-800 rounded"></div>
                <div className="h-4 w-20 bg-gray-800 rounded"></div>
                <div className="h-4 w-12 bg-gray-800 rounded"></div>
              </div>
            </div>
          </div>


          {/* Card 3 */}
          <div className="flex flex-col bg-[#15171c] rounded-xl overflow-hidden border border-gray-800">
            <div className="w-full h-[300px] bg-gray-800"></div>

            <div className="p-4">
              <div className="flex gap-2 mb-3">
                <div className="h-5 w-16 bg-gray-800 rounded-full"></div>
                <div className="h-5 w-24 bg-gray-800 rounded-full"></div>
              </div>

              <div className="h-6 w-3/4 bg-gray-800 rounded"></div>

              <div className="h-4 w-1/3 bg-gray-800 rounded mt-2"></div>

              <div className="flex gap-4 mt-5">
                <div className="h-4 w-16 bg-gray-800 rounded"></div>
                <div className="h-4 w-20 bg-gray-800 rounded"></div>
                <div className="h-4 w-12 bg-gray-800 rounded"></div>
              </div>
            </div>
          </div>


          {/* Card 4 */}
          <div className="flex flex-col bg-[#15171c] rounded-xl overflow-hidden border border-gray-800">
            <div className="w-full h-[300px] bg-gray-800"></div>

            <div className="p-4">
              <div className="flex gap-2 mb-3">
                <div className="h-5 w-20 bg-gray-800 rounded-full"></div>
              </div>

              <div className="h-6 w-2/3 bg-gray-800 rounded"></div>

              <div className="h-4 w-1/3 bg-gray-800 rounded mt-2"></div>

              <div className="flex gap-4 mt-5">
                <div className="h-4 w-16 bg-gray-800 rounded"></div>
                <div className="h-4 w-20 bg-gray-800 rounded"></div>
                <div className="h-4 w-12 bg-gray-800 rounded"></div>
              </div>
            </div>
          </div>


          {/* Card 5 */}
          <div className="flex flex-col bg-[#15171c] rounded-xl overflow-hidden border border-gray-800">
            <div className="w-full h-[300px] bg-gray-800"></div>

            <div className="p-4">
              <div className="flex gap-2 mb-3">
                <div className="h-5 w-16 bg-gray-800 rounded-full"></div>
                <div className="h-5 w-20 bg-gray-800 rounded-full"></div>
              </div>

              <div className="h-6 w-3/4 bg-gray-800 rounded"></div>

              <div className="h-4 w-1/3 bg-gray-800 rounded mt-2"></div>

              <div className="flex gap-4 mt-5">
                <div className="h-4 w-16 bg-gray-800 rounded"></div>
                <div className="h-4 w-20 bg-gray-800 rounded"></div>
                <div className="h-4 w-12 bg-gray-800 rounded"></div>
              </div>
            </div>
          </div>


          {/* Card 6 */}
          <div className="flex flex-col bg-[#15171c] rounded-xl overflow-hidden border border-gray-800">
            <div className="w-full h-[300px] bg-gray-800"></div>

            <div className="p-4">
              <div className="flex gap-2 mb-3">
                <div className="h-5 w-20 bg-gray-800 rounded-full"></div>
                <div className="h-5 w-16 bg-gray-800 rounded-full"></div>
              </div>

              <div className="h-6 w-2/3 bg-gray-800 rounded"></div>

              <div className="h-4 w-1/3 bg-gray-800 rounded mt-2"></div>

              <div className="flex gap-4 mt-5">
                <div className="h-4 w-16 bg-gray-800 rounded"></div>
                <div className="h-4 w-20 bg-gray-800 rounded"></div>
                <div className="h-4 w-12 bg-gray-800 rounded"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Loading;

