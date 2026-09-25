import Link from "next/link";
import { IExercise } from "../../types/type";
import Image from "next/image";
interface ExerciseCardProps {
  exercise: IExercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return ( <Link href={`/Exercises/${exercise.id}`} className="w-full">    
    <div className="flex flex-col bg-[#15171c] rounded-xl overflow-hidden border border-gray-800">
      {/* Image */}
      <Image
        src={exercise.image}
        alt={exercise.name}
        width={500}
        height={250}
        className="w-full h-[200px] object-cover rounded-t-lg"
      />

      <div className="p-4">
        {/* Muscle Groups */}
        <div className="flex gap-2 mb-3">
          {exercise.muscleGroups.map((muscle: string) => (
            <span
              key={muscle}
              className="bg-lime-400 text-black text-[10px] font-bold px-2 py-1 rounded-full"
            >
              {muscle.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2 className="text-white font-bold text-lg">{exercise.name}</h2>

        {/* Equipment */}
        <p className="text-gray-500 text-sm mt-1">{exercise.equipment}</p>

        {/* Bottom information */}
        <div className="flex items-center gap-4 mt-5 text-gray-400 text-xs">
          <span>◷ {exercise.duration} min</span>

          <span>🔥 {exercise.caloriesBurned} kcal</span>

          <span>★ {exercise.rating}</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ExerciseCard;
