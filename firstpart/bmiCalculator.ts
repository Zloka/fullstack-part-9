const parseArguments = (args: Array<string>): [number, number] => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
   return [Number(args[2]), Number(args[3])];
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

const calculateBmi = (height: number, weight: number) => {
  const heightInMetres = height / 100;
  const bmi = weight / (heightInMetres * heightInMetres);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi > 18.5 && bmi < 25) {
    return "Normal (healthy weight)";
  } else if (bmi > 25 && bmi < 30) {
    return "Overweight";
  } else {
    return "Obesity";
  }
};

console.log(calculateBmi(...parseArguments(process.argv)));
