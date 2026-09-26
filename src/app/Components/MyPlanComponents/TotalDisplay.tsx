"use client";

import { useContext } from "react";
import { WorkoutContext } from "@/Context/WorkoutContext";

const TotalDisplay = () => {
  const context = useContext(WorkoutContext);

  if (!context) return null;

  const { plannedWorkouts } = context;

  const totalExercises = plannedWorkouts.length;

  const totalMinutes = plannedWorkouts.reduce(
    (total, exercise) => total + exercise.duration,
    0
  );

  const totalCalories = plannedWorkouts.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0
  );

  return (
    <div className="w-full rounded-xl border border-[#252A33] bg-[#14171D] px-4 py-5">
      <div className="grid grid-cols-3">

        {/* Exercises */}
        <div className="px-4">
          <p className="text-xs text-gray-400">
            Exercises
          </p>

          <p className="mt-1 text-2xl font-bold text-[#C2F800]">
            {totalExercises}
          </p>
        </div>

        {/* Minutes */}
        <div className="border-l border-[#252A33] px-6">
          <p className="text-xs text-gray-400">
            Minutes
          </p>

          <p className="mt-1 text-2xl font-bold text-white">
            {totalMinutes}
          </p>
        </div>

        {/* Calories */}
        <div className="border-l border-[#252A33] px-6">
          <p className="text-xs text-gray-400">
            Calories
          </p>

          <p className="mt-1 text-2xl font-bold text-white">
            {totalCalories}
          </p>
        </div>

      </div>
    </div>
  );
};

export default TotalDisplay;