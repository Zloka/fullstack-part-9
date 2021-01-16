import express from 'express';
import { calculateBmi } from './modules/bmiCalculator';
import { calculateExercises } from './modules/exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;
  const invalidArguments = !height || !weight || isNaN(Number(height)) || isNaN(Number(weight));

  if (invalidArguments) {
    res.status(400).send('Arguments are invalid, expected height and weight to be numbers');
  }
  const heightAsNum = Number(height);
  const weightAsNum = Number(weight);
  res.json({ height: heightAsNum, weight: weightAsNum, bmi: calculateBmi(heightAsNum, weightAsNum)});
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  const argumentsMissing = !daily_exercises || !target;

  if (argumentsMissing) {
    res.status(400).send('parameters missing');
  }

  if (Array.isArray(daily_exercises)) {
    const dailyExercisesAsNumbers = daily_exercises.map((exercise: unknown) => Number(exercise));
    const areDailyExercisesValid = dailyExercisesAsNumbers.every(exercise => !isNaN(exercise));
    const targetAsNumber = Number(target);
    const isTargetValid = !isNaN(targetAsNumber);

    if (isTargetValid && areDailyExercisesValid) {
      return res.json(calculateExercises([Number(target)].concat(daily_exercises.map((exercise: unknown) => Number(exercise)))));
    }
  }

  return res.status(400).send('malformatted parameters');
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});