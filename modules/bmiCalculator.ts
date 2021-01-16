const calculateBmi = (height: number, weight: number): string => {
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

export {
  calculateBmi
};