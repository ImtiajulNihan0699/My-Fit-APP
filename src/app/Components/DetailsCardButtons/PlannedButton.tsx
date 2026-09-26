"use client";

import { useContext } from "react";
import { toast } from "react-toastify";
import { WorkoutContext } from "@/Context/WorkoutContext";
import { IExercise } from "@/app/types/type";

const PlannedButton = ({ exercise }: { exercise: IExercise }) => {
  const context = useContext(WorkoutContext);

  if (!context) return null;

  const { plannedWorkouts, setplannedWorkouts } = context;

  const isPlanned = plannedWorkouts.some(
    (workout) => workout.id === exercise.id
  );

  const handleAddToPlan = () => {
    setplannedWorkouts((prev) => [...prev, exercise]);

    toast.success("Added to today's plan!");
  };

  return (
    <button
      onClick={handleAddToPlan}
      disabled={isPlanned}
      className={`px-5 py-2 rounded-md text-sm font-medium transition-opacity ${
        isPlanned
          ? "bg-lime-400 text-black opacity-40 cursor-not-allowed"
          : "bg-lime-400 text-black"
      }`}
    >
      {isPlanned ? "Added to Plan ✓" : "Add to today's plan"}
    </button>
  );
};

export default PlannedButton;