import express from 'express';
import { calculateBmi } from './modules/bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;
  const invalidArguments = !height || !weight || isNaN(Number(height)) || isNaN(Number(weight));

  if (invalidArguments) {
    res.status(400).send('Arguments are invalid, expected height and weight to be numbers');
  }
  const heightAsNum = Number(height);
  const weightAsNum = Number(weight);
  res.json({ height: heightAsNum, weight: weightAsNum, bmi: calculateBmi(heightAsNum, weightAsNum)});
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});