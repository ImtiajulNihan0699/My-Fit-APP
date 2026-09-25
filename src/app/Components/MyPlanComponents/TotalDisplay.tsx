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
    <div>
      <h3 className="text-xl font-semibold mb-4">
        Today's Summary
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div>
          <p className="text-sm text-gray-500">
            Total Exercises
          </p>

          <p className="text-2xl font-bold">
            {totalExercises}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Total Minutes
          </p>

          <p className="text-2xl font-bold">
            {totalMinutes}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Total Calories
          </p>

          <p className="text-2xl font-bold">
            {totalCalories}
          </p>
        </div>

      </div>
    </div>
  );
};

export default TotalDisplay;