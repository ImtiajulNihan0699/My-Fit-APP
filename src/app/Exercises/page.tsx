import React from "react";
import { IExercise } from "../types/type";
import ExerciseCard from "../Components/homepage/ExerciseCard";

const getExercises = async (): Promise<IExercise[]> => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const data = await response.json();

  return data as IExercise[];
};

const Exercises = async () => {
  const exercises = await getExercises();

  return (
    <section
      id="library"
      className="scroll-mt-20 w-full bg-black px-4 py-8"
    >
      <div className="container mx-auto">
        <h2 className="mx-5 my-5 text-2xl font-bold text-white">
          THE LIBRARY
        </h2>

        <p className="mx-5 text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="mx-5 my-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exercises;