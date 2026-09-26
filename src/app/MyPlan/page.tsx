import React from "react";
import TotalDisplay from "../Components/MyPlanComponents/TotalDisplay";
import TodaysPlanTab from "../Components/MyPlanTabs/TodaysPlanTab";
import SavedTab from "../Components/MyPlanTabs/SavedTab";

const MyPlan = () => {
  return (
    <div className="bg-black px-4 py-8">
      <div className="container mx-auto">

      {/* Page Header */}
      <div className="mb-8">
        <h2 className="Font text-3xl font-bold">
          My Plan
        </h2>

        <p className="mt-2 text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Total Statistics */}
      <TotalDisplay />

      {/* Tabs */}
      <div className="mt-8 tabs tabs-box">

        {/* Today's Plan */}
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Today's Plan"
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">
          <TodaysPlanTab /> 
        </div>

        {/* Saved */}
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Saved"
          defaultChecked
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">
          <SavedTab />
        </div>

      </div>
      </div>
    </div>
  );
};

export default MyPlan;