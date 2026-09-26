"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkoutContext } from "@/Context/WorkoutContext";

const TodaysPlanTab = () => {
  const context = useContext(WorkoutContext);

  if (!context) return null;

  const { plannedWorkouts, setplannedWorkouts } = context;

  const removeWorkout = (id: number) => {
    setplannedWorkouts((prev) =>
      prev.filter((exercise) => exercise.id !== id)
    );
  };

  if (plannedWorkouts.length === 0) {
    return (
      <div className="py-10 text-center text-gray-500">
        No workouts added to today&aposs plan yet.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {plannedWorkouts.map((exercise) => (
        <div
          key={exercise.id}
          className="flex items-center gap-4 rounded-xl border border-[#252A33] bg-[#14171D] p-3"
        >
          {/* Image */}
          <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg">
            <Image
              src={exercise.image}
              alt={exercise.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Exercise information */}
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-bold text-white">
              {exercise.name}
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              {exercise.equipment}
            </p>

            {/* Stats */}
            <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-400">
              <span>◷ {exercise.duration} min</span>
              <span>🔥 {exercise.caloriesBurned} kcal</span>
              <span>★ {exercise.rating}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            <Link
              href={`/Exercises/${exercise.id}`}
              className="rounded-full border border-gray-600 px-4 py-2 text-xs text-white transition hover:border-white"
            >
              View Details
            </Link>

            <button
              className="rounded-full bg-[#C2F800] px-4 py-2 text-xs font-semibold text-black transition hover:bg-[#d4ff33]"
            >
              ✓ Mark as Done
            </button>

            <button
              onClick={() => removeWorkout(exercise.id)}
              className="px-2 text-gray-500 transition hover:text-white"
              aria-label={`Remove ${exercise.name}`}
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodaysPlanTab;