const parseExerciseCalculatorArguments = (args: Array<string>): number[] => {
  if (args.length < 4) throw new Error('Not enough arguments. At least 2 arguments need to be provided');

  const relevantArgs = args.slice(2);
  const notNumbers = relevantArgs.some(arg => isNaN(Number(arg)));
  if (notNumbers) {
    throw new Error('Provided values were not numbers! Please provide only numbers!');
  }

  const isNegative = relevantArgs.some(arg => Number(arg) < 0);
  if (isNegative) {
    throw new Error('Negative numbers do not make sense in this context!');
  }

  return relevantArgs.map(arg => Number(arg));
}


interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (data: number[]): Result => {
  const target = data[0]; // Fine as long has the arguments have been parsed!
  const trainingData = data.slice(1);
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

console.log(calculateExercises(parseExerciseCalculatorArguments(process.argv)));
