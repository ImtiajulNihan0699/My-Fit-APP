"use client";

const BannerButton = () => {
  const handleScroll = () => {
    const librarySection = document.getElementById("library");

    if (librarySection) {
      librarySection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="inline-flex items-center gap-2 rounded-full bg-[#C2F800] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#d4ff33]"
    >
      BROWSE WORKOUTS
      <span>↓</span>
    </button>
  );
};

export default BannerButton;