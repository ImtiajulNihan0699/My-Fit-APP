"use client";

import { useContext } from "react";
import Link from "next/link";
import { WorkoutContext } from "@/Context/WorkoutContext";

const NavbarButtons = () => {
  const context = useContext(WorkoutContext);
  if (!context) return null;

  const { plannedWorkouts, savedWorkouts } = context;

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <Link
        href="/MyPlan"
        className="flex items-center px-2 py-1.5 text-[10px] font-medium text-[#C2F800] transition hover:bg-[#C2F800] hover:text-black sm:px-3 sm:py-2 sm:text-xs md:px-4 md:text-sm"
      >
        Planned
        <span className="ml-1 rounded-full bg-[#C2F800] px-1.5 py-0.5 text-[9px] text-black sm:px-2 sm:text-xs">
          {plannedWorkouts.length}
        </span>
      </Link>

      <Link
        href="/MyPlan"
        className="flex items-center px-2 py-1.5 text-[10px] font-medium text-white transition hover:border-white hover:bg-white hover:text-black sm:px-3 sm:py-2 sm:text-xs md:px-4 md:text-sm"
      >
        Saved
        <span className="ml-1 rounded-full bg-gray-700 px-1.5 py-0.5 text-[9px] sm:px-2 sm:text-xs">
          {savedWorkouts.length}
        </span>
      </Link>
    </div>
  );
};

export default NavbarButtons;