const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calcBtn = document.getElementById("calculateBtn");

// BMI calclulator function
function bmiCalculator(weight, height) {
return (weight / Math.pow(height, 2));
}

// creates a new paragraph to display the result
function createPara(bmi) {
    const newPara = document.createElement("p");
    newPara.innerHTML = "BMI: " + bmi;
    document.getElementById('input_box').appendChild(newPara);
}

calcBtn.addEventListener('click', () => {
    //read the values from the input fields
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    // event to call the bmiCalculator function
    const rawBMI = bmiCalculator(weight, height);
    const bmi = Math.round(rawBMI);

    // event to call the createPara function
    createPara(bmi);
});
