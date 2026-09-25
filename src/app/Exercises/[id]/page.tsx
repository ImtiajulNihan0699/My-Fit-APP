import { IExercise } from "@/app/types/type";
import DetailsCard from "@/app/Components/homepage/DetailsCard";

const getExercise = async (id: string): Promise<IExercise> => {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  const data = await response.json();

  return data as IExercise;
};

const ExerciseDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const exercise = await getExercise(id);

  

  return <DetailsCard exercise={exercise} />;
};

export default ExerciseDetails;