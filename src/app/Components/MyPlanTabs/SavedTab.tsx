"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { WorkoutContext } from "@/Context/WorkoutContext";

const SavedTab = () => {
  const context = useContext(WorkoutContext);

  if (!context) return null;

  const { savedWorkouts, setSavedWorkouts } = context;

  // Remove saved workout
  const removeSavedWorkout = (id: number, name: string) => {
    setSavedWorkouts((prev) =>
      prev.filter((exercise) => exercise.id !== id)
    );

    toast.success(`${name} removed from saved workouts.`);
  };

  // Empty state
  if (savedWorkouts.length === 0) {
    return (
      <div className="flex min-h-[170px] flex-col items-center justify-center rounded-xl border border-dashed border-[#252A33] bg-[#0F1115]">
        <h3 className="text-sm font-bold text-white">
          NOTHING HERE YET
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          Browse the library and save a workout for later.
        </p>

        <Link
          href="/"
          className="mt-4 rounded-full bg-[#C2F800] px-5 py-2 text-xs font-semibold text-black transition hover:bg-[#d4ff33]"
        >
          Go to workouts
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {savedWorkouts.map((exercise) => (
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

          {/* Exercise Information */}
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-bold text-white">
              {exercise.name}
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              {exercise.equipment}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-400">
              <span>
                <span className="text-[#C2F800]">◷</span>{" "}
                {exercise.duration} min
              </span>

              <span>
                <span className="text-[#C2F800]">●</span>{" "}
                {exercise.caloriesBurned} kcal
              </span>

              <span>
                <span className="text-[#C2F800]">★</span>{" "}
                {exercise.rating}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-3">
            {/* View Details */}
            <Link
              href={`/Exercises/${exercise.id}`}
              className="rounded-full border border-[#3A414C] px-4 py-2 text-xs text-white transition hover:border-white"
            >
              View Details
            </Link>

            {/* Remove */}
            <button
              onClick={() =>
                removeSavedWorkout(exercise.id, exercise.name)
              }
              className="px-2 text-lg text-gray-500 transition hover:text-white"
              aria-label={`Remove ${exercise.name} from saved workouts`}
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedTab;