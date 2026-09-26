"use client";

import React, { useContext, useState } from "react";
import TotalDisplay from "../Components/MyPlanComponents/TotalDisplay";
import TodaysPlanTab from "../Components/MyPlanTabs/TodaysPlanTab";
import SavedTab from "../Components/MyPlanTabs/SavedTab";
import { WorkoutContext } from "@/Context/WorkoutContext";

const MyPlan = () => {
  const context = useContext(WorkoutContext);

  const [sortby, setSortby] = useState<"rating" | "duration" | "calories">("duration");

  if (!context) return null;

  const { plannedWorkouts, savedWorkouts } = context;

  const sortExercises = (exercises: typeof plannedWorkouts) => {
    const sortedExercises = [...exercises];

    if (sortby === "rating") {
      sortedExercises.sort((a, b) => b.rating - a.rating);
    } else if (sortby === "duration") {
      sortedExercises.sort((a, b) => b.duration - a.duration);
    } else if (sortby === "calories") {
      sortedExercises.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    return sortedExercises;
  };

  const sortedPlannedExercises = sortExercises(plannedWorkouts);
  const sortedSavedExercises = sortExercises(savedWorkouts);

  return (
    <div className="min-h-screen bg-black px-6 py-10">
      <div className="container mx-auto max-w-5xl">

        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white uppercase">
            MY PLAN
          </h2>
          <p className="mt-2 text-gray-500 text-sm">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Total Statistics */}
        <TotalDisplay />

        {/* Tabs + Sort */}
        <div className="mt-8">

          {/* Sort Dropdown — ডানে আলাদা */}
          <div className="flex justify-end mb-3">
            <select
              value={sortby}
              onChange={(e) =>
                setSortby(e.target.value as "rating" | "duration" | "calories")
              }
              className="bg-[#1a1a1a] text-white text-sm border border-gray-600 rounded-md px-3 py-2 outline-none cursor-pointer hover:border-gray-400"
            >
              <option value="duration">Duration</option>
              <option value="rating">Rating</option>
              <option value="calories">Calories</option>
            </select>
          </div>

          {/* DaisyUI Tabs — আগের মতোই */}
          <div className="tabs tabs-box">

            <input
              type="radio"
              name="my_plan_tabs"
              className="tab"
              aria-label={`Today's Plan (${plannedWorkouts.length})`}
              defaultChecked
            />
            <div className="tab-content bg-[#14171D] border-[#252A33] p-4">
              <TodaysPlanTab exercises={sortedPlannedExercises} />
            </div>

            <input
              type="radio"
              name="my_plan_tabs"
              className="tab"
              aria-label={`Saved (${savedWorkouts.length})`}
            />
            <div className="tab-content bg-[#14171D] border-[#252A33] p-4">
              <SavedTab exercises={sortedSavedExercises} />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MyPlan;