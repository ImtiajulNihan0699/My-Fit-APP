"use client";

import { useContext } from "react";
import { WorkoutContext } from "@/Context/WorkoutContext";
import { IExercise } from "@/app/types/type";

const SavedButton = ({ exercise }: { exercise: IExercise }) => {
  const { savedWorkouts, setSavedWorkouts } = useContext(WorkoutContext)!;
  const isSaved = savedWorkouts.some((w) => w.id === exercise.id);

  return (
    <button
      onClick={() => setSavedWorkouts((prev) => [...prev, exercise])}
      disabled={isSaved}
      className={`border px-5 py-2 rounded-md text-sm transition-opacity
        ${isSaved
          ? "border-gray-700 text-gray-500 opacity-40 cursor-not-allowed"
          : "border-gray-700 text-gray-300"
        }`}
    >
      {isSaved ? "Saved ✓" : "Save for later"}
    </button>
  );
};

export default SavedButton;