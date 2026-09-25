const Loading = () => {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-white p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Image Skeleton */}
        <div>
          <div className="w-full h-[500px] bg-gray-800 rounded-lg animate-pulse"></div>
        </div>

        {/* Details Skeleton */}
        <div>

          {/* Title */}
          <div className="h-9 w-2/3 bg-gray-800 rounded animate-pulse"></div>

          {/* Description */}
          <div className="mt-4 space-y-2 animate-pulse">
            <div className="h-4 w-full bg-gray-800 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-800 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-800 rounded"></div>
          </div>

          {/* Muscle Groups */}
          <div className="flex gap-2 mt-5 animate-pulse">
            <div className="h-6 w-20 bg-gray-800 rounded-full"></div>
            <div className="h-6 w-24 bg-gray-800 rounded-full"></div>
            <div className="h-6 w-16 bg-gray-800 rounded-full"></div>
          </div>

          {/* Information Table */}
          <div className="mt-5 border border-gray-800 rounded-lg overflow-hidden animate-pulse">

            <div className="flex justify-between p-4 border-b border-gray-800">
              <div className="h-3 w-20 bg-gray-800 rounded"></div>
              <div className="h-4 w-24 bg-gray-800 rounded"></div>
            </div>

            <div className="flex justify-between p-4 border-b border-gray-800">
              <div className="h-3 w-20 bg-gray-800 rounded"></div>
              <div className="h-4 w-20 bg-gray-800 rounded"></div>
            </div>

            <div className="flex justify-between p-4 border-b border-gray-800">
              <div className="h-3 w-10 bg-gray-800 rounded"></div>
              <div className="h-4 w-12 bg-gray-800 rounded"></div>
            </div>

            <div className="flex justify-between p-4 border-b border-gray-800">
              <div className="h-3 w-10 bg-gray-800 rounded"></div>
              <div className="h-4 w-12 bg-gray-800 rounded"></div>
            </div>

            <div className="flex justify-between p-4 border-b border-gray-800">
              <div className="h-3 w-16 bg-gray-800 rounded"></div>
              <div className="h-4 w-20 bg-gray-800 rounded"></div>
            </div>

            <div className="flex justify-between p-4 border-b border-gray-800">
              <div className="h-3 w-16 bg-gray-800 rounded"></div>
              <div className="h-4 w-24 bg-gray-800 rounded"></div>
            </div>

            <div className="flex justify-between p-4">
              <div className="h-3 w-12 bg-gray-800 rounded"></div>
              <div className="h-4 w-12 bg-gray-800 rounded"></div>
            </div>

          </div>

          {/* Instructions */}
          <div className="mt-6 animate-pulse">

            <div className="h-6 w-32 bg-gray-800 rounded mb-4"></div>

            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="h-4 w-4 bg-gray-800 rounded"></div>
                <div className="h-4 w-full bg-gray-800 rounded"></div>
              </div>

              <div className="flex gap-2">
                <div className="h-4 w-4 bg-gray-800 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-800 rounded"></div>
              </div>

              <div className="flex gap-2">
                <div className="h-4 w-4 bg-gray-800 rounded"></div>
                <div className="h-4 w-4/5 bg-gray-800 rounded"></div>
              </div>

              <div className="flex gap-2">
                <div className="h-4 w-4 bg-gray-800 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-800 rounded"></div>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-7 animate-pulse">
            <div className="h-10 w-40 bg-gray-800 rounded-md"></div>
            <div className="h-10 w-32 bg-gray-800 rounded-md"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Loading;
