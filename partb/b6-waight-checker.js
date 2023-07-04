const convertWeight = () => {
  const kg = parseFloat(prompt("Enter weight in kilograms:"));
  const lbs = kg * 2.2;
  
  if (lbs > 150) {
    alert("Obese");
  } else if (lbs >= 100 && lbs <= 150) {
    alert("You are ok");
  } else {
    alert("Underweight");
  }
};

