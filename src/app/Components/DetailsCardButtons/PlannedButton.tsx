"use client";

import { useContext } from "react";
import { WorkoutContext } from "@/Context/WorkoutContext";
import { IExercise } from "@/app/types/type";

const PlannedButton = ({ exercise }: { exercise: IExercise }) => {
  const { plannedWorkouts, setplannedWorkouts } = useContext(WorkoutContext)!;
  const isPlanned = plannedWorkouts.some((w) => w.id === exercise.id);

  return (
    <button
      onClick={() => setplannedWorkouts((prev) => [...prev, exercise])}
      disabled={isPlanned}
      className={`px-5 py-2 rounded-md text-sm font-medium transition-opacity
        ${isPlanned
          ? "bg-lime-400 text-black opacity-40 cursor-not-allowed"
          : "bg-lime-400 text-black"
        }`}
    >
      {isPlanned ? "Added to Plan ✓" : "Add to today's plan"}
    </button>
  );
};

export default PlannedButton;