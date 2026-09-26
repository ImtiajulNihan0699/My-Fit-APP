"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkoutContext } from "@/Context/WorkoutContext";

const SavedTab = () => {
  const context = useContext(WorkoutContext);

  if (!context) return null;

  const { savedWorkouts, setSavedWorkouts } = context;

  const removeSavedWorkout = (id: number) => {
    setSavedWorkouts((prev) =>
      prev.filter((exercise) => exercise.id !== id)
    );
  };

  if (savedWorkouts.length === 0) {
    return (
      <div className="py-10 text-center text-gray-500">
        No saved workouts yet.
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
          {/* Exercise Image */}
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

            {/* Exercise Stats */}
            <div className="mt-2 flex items-center gap-3 text-xs text-gray-400">
              <span className="text-[#C2F800]">
                ◷
              </span>
              <span>{exercise.duration} min</span>

              <span className="text-[#C2F800]">
                ●
              </span>
              <span>{exercise.caloriesBurned} kcal</span>

              <span className="text-[#C2F800]">
                ★
              </span>
              <span>{exercise.rating}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-3">
            <Link
              href={`/Exercises/${exercise.id}`}
              className="rounded-full border border-[#3A414C] px-4 py-2 text-xs text-white transition hover:border-white"
            >
              View Details
            </Link>

            <button
              onClick={() => removeSavedWorkout(exercise.id)}
              className="text-lg text-gray-500 transition hover:text-white"
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