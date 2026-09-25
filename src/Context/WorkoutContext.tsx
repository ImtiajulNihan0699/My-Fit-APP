"use client";

import React, { createContext, useState } from "react";
import { IExercise } from "@/app/types/type";

type WorkoutContextType = {
  plannedWorkouts: IExercise[];
  setplannedWorkouts: React.Dispatch<React.SetStateAction<IExercise[]>>;
  savedWorkouts: IExercise[];
  setSavedWorkouts: React.Dispatch<React.SetStateAction<IExercise[]>>;
};

export const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [plannedWorkouts, setplannedWorkouts] = useState<IExercise[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<IExercise[]>([]);

  const sharedData = {
    plannedWorkouts,
    setplannedWorkouts,
    savedWorkouts,
    setSavedWorkouts,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;