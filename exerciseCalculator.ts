interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (trainingData: number[], target: number): Result => {
  const periodLength = trainingData.length;
  const trainingDays = trainingData.filter(trainingDatum => trainingDatum !== 0).length;
  const totalHours = trainingData.reduce((acc, cur) => acc + cur, 0);
  const average = totalHours / periodLength;
  const success = trainingDays === target; // Training too much is also considered a failure. Don't overwork yourself! :)
  const daysFromTarget = Math.abs(trainingDays - target);
  const ratingDeduction = Math.min(2, daysFromTarget);
  const rating = 3 - ratingDeduction;
  const ratingDescription =
    rating === 3
      ? "Great, you hit your target spot on!" 
      : rating === 2 
        ? 'You got close to your target, but can still improve!'
        : 'You missed your target significantly and your habits will likely need to change!'

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    target,
    average,
    ratingDescription
  };
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
