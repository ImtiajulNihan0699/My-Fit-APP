"use client";

import { useContext } from "react";
import { toast } from "react-toastify";
import { WorkoutContext } from "@/Context/WorkoutContext";
import { IExercise } from "@/app/types/type";

const SavedButton = ({ exercise }: { exercise: IExercise }) => {
  const context = useContext(WorkoutContext);

  if (!context) return null;

  const { savedWorkouts, setSavedWorkouts } = context;

  const isSaved = savedWorkouts.some(
    (workout) => workout.id === exercise.id
  );

  const handleSave = () => {
    setSavedWorkouts((prev) => [...prev, exercise]);

    toast.success("Workout saved!");
  };

  return (
    <button
      onClick={handleSave}
      disabled={isSaved}
      className={`px-5 py-2 rounded-md text-sm font-medium transition-opacity ${
        isSaved
          ? "bg-gray-500 text-white opacity-50 cursor-not-allowed"
          : "border border-gray-500 text-white hover:bg-white hover:text-black"
      }`}
    >
      {isSaved ? "Saved ✓" : "Save workout"}
    </button>
  );
};

export default SavedButton;