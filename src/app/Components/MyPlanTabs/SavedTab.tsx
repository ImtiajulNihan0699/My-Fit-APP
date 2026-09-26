"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { WorkoutContext } from "@/Context/WorkoutContext";
import { IExercise } from "@/app/types/type";

const SavedTab = ({
  exercises,
}: {
  exercises: IExercise[];
}) => {
  const context = useContext(WorkoutContext);

  if (!context) return null;

  const { setSavedWorkouts } = context;

  const removeSavedWorkout = (id: number, name: string) => {
    setSavedWorkouts((prev) =>
      prev.filter((exercise) => exercise.id !== id)
    );
    toast.success(`${name} removed from saved workouts.`);
  };

  if (exercises.length === 0) {
    return (
      <div className="flex min-h-[170px] flex-col items-center justify-center rounded-xl border border-dashed border-[#252A33] bg-[#0F1115]">
        <h3 className="text-sm font-bold text-white">NOTHING HERE YET</h3>
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
      {exercises.map((exercise) => (
        <div
          key={exercise.id}
          className="flex flex-col gap-3 rounded-xl border border-[#252A33] bg-[#14171D] p-3 sm:flex-row sm:items-center sm:gap-4"
        >
          {/* Image */}
          <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-24">
            <Image
              src={exercise.image}
              alt={exercise.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-bold text-white">
              {exercise.name}
            </h3>
            <p className="mt-1 text-xs text-gray-500">{exercise.equipment}</p>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-400">
              <span>
                <span className="text-[#C2F800]">◷</span> {exercise.duration} min
              </span>
              <span>
                <span className="text-[#C2F800]">●</span> {exercise.caloriesBurned} kcal
              </span>
              <span>
                <span className="text-[#C2F800]">★</span> {exercise.rating}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 sm:shrink-0 sm:flex-nowrap">
            <Link
              href={`/Exercises/${exercise.id}`}
              className="rounded-full border border-[#3A414C] px-4 py-2 text-xs text-white transition hover:border-white"
            >
              View Details
            </Link>

            <button
              onClick={() => removeSavedWorkout(exercise.id, exercise.name)}
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