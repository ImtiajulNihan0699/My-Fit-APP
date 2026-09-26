import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-6xl font-bold text-[#C2F800]">
        404
      </p>

      <h1 className="mt-4 text-2xl font-bold text-white">
        Page Not Found
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        The page you are looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-full bg-[#C2F800] px-5 py-2 text-sm font-semibold text-black hover:bg-[#d4ff33]"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default NotFound;