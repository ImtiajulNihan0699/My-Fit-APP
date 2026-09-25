"use client";

import { useContext } from "react";
import Link from "next/link";
import { WorkoutContext } from "@/Context/WorkoutContext";

const NavbarButtons = () => {
  const context = useContext(WorkoutContext);

  if (!context) return null;

  const { plannedWorkouts, savedWorkouts } = context;

  return (
    <div className="flex items-center gap-3">

      {/* Planned */}
      <Link
        href="/MyPlan"
        className="px-4 py-2 text-sm font-medium text-[#C2F800] transition hover:bg-[#C2F800] hover:text-black"
      >
        Planned
        <span className="ml-1 rounded-full bg-[#C2F800] px-2 py-0.5 text-xs text-black">
          {plannedWorkouts.length}
        </span>
      </Link>

      {/* Saved */}
      <Link
        href="/MyPlan"
        className="px-4 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black"
      >
        Saved
        <span className="ml-1 rounded-full bg-gray-700 px-2 py-0.5 text-xs">
          {savedWorkouts.length}
        </span>
      </Link>

    </div>
  );
};

export default NavbarButtons;