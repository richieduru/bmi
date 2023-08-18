const calculateBMI = () => {
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const resultText = document.getElementById("result");

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    return (resultText.textContent = "Enter a valid weight and height value");
  }

  let bmi = (weight / (height * height)) * 703;
  bmi = bmi.toFixed(2);

  let category =
    bmi < 18.5
      ? "Underweight"
      : bmi >= 18.5 && bmi < 25
      ? "Normal weight"
      : bmi >= 25 && bmi < 30
      ? "Overweight"
      : "Obesity";

  resultText.textContent = `Your BMI is: ${bmi} (${category})`;
};
