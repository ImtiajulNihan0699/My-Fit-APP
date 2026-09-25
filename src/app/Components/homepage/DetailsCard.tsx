
import { IExercise } from "@/app/types/type";
import Image from "next/image";

interface DetailsCardProps {
  exercise: IExercise;
}

const DetailsCard = ({ exercise }: DetailsCardProps) => {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-white p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Image */}
        <div>
          <Image
            src={exercise.image}
            alt={exercise.name}
            width={600}
            height={600}
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold uppercase">
            {exercise.name}
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            {exercise.description}
          </p>

          {/* Muscle Groups */}
          <div className="flex gap-2 mt-4">
            {exercise.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Information */}
          <div className="mt-5 border border-gray-800 rounded-lg overflow-hidden">

            <div className="flex justify-between p-4 border-b border-gray-800">
              <span className="text-gray-400 text-xs uppercase">
                Equipment
              </span>
              <span className="text-sm">
                {exercise.equipment}
              </span>
            </div>

            <div className="flex justify-between p-4 border-b border-gray-800">
              <span className="text-gray-400 text-xs uppercase">
                Difficulty
              </span>
              <span className="text-sm">
                {exercise.difficulty}
              </span>
            </div>

            <div className="flex justify-between p-4 border-b border-gray-800">
              <span className="text-gray-400 text-xs uppercase">
                Sets
              </span>
              <span className="text-sm">
                {exercise.sets}
              </span>
            </div>

            <div className="flex justify-between p-4 border-b border-gray-800">
              <span className="text-gray-400 text-xs uppercase">
                Reps
              </span>
              <span className="text-sm">
                {exercise.reps}
              </span>
            </div>

            <div className="flex justify-between p-4 border-b border-gray-800">
              <span className="text-gray-400 text-xs uppercase">
                Duration
              </span>
              <span className="text-sm">
                {exercise.duration} min
              </span>
            </div>

            <div className="flex justify-between p-4 border-b border-gray-800">
              <span className="text-gray-400 text-xs uppercase">
                Calories
              </span>
              <span className="text-sm">
                {exercise.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex justify-between p-4">
              <span className="text-gray-400 text-xs uppercase">
                Rating
              </span>
              <span className="text-sm">
                {exercise.rating}
              </span>
            </div>

          </div>

          {/* Instructions */}
          <div className="mt-6">
            <h2 className="font-bold text-lg mb-3">
              INSTRUCTIONS
            </h2>

            <ol className="space-y-3 text-sm text-gray-400">
              {exercise.instructions.map((instruction, index) => (
                <li key={index}>
                  <span className="text-gray-500 mr-2">
                    {index + 1}.
                  </span>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-7">
            <button className="bg-lime-400 text-black px-5 py-2 rounded-md text-sm font-medium">
              Add to today&apos;s plan
            </button>

            <button className="border border-gray-700 px-5 py-2 rounded-md text-sm text-gray-300">
              Save for later
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
