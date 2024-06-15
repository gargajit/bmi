const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calcBtn = document.getElementById("calculateBtn");

// BMI calclulator function
function bmiCalculator(weight, height) {
return (weight / Math.pow(height, 2));
}

// create or update paragraph to display the result
function createPara(bmi) {
    let updatePara = null;
            
    // Check if any of the result paragraphs already exist
    if (document.getElementById("result_underweight")){
        updatePara = document.getElementById("result_underweight");
    }
    else if (document.getElementById("result_normal")){
        updatePara = document.getElementById("result_normal");
    }
    else if (document.getElementById("result_overweight")){
        updatePara = document.getElementById("result_overweight");
    }
    else if (document.getElementById("result_obese")){
        updatePara = document.getElementById("result_obese");
    }

    // If a paragraph exists, update its ID and text content
    if (updatePara) {
        if (bmi <= 18.4) {
            updatePara.id = "result_underweight";
            updatePara.innerHTML = "BMI: " + bmi;
            resetRowColors();
            document.getElementById("row1").style.color = "tomato";
        } 
        else if (bmi >= 18.5 && bmi <= 24.9) {
            updatePara.id = "result_normal";
            updatePara.innerHTML = "BMI: " + bmi;
            resetRowColors();
            document.getElementById("row2").style.color = "#5cb800";
        } 
        else if (bmi >= 25 && bmi <= 39.9) {
            updatePara.id = "result_overweight";
            updatePara.innerHTML = "BMI: " + bmi;
            resetRowColors();
            document.getElementById("row3").style.color = "#e39924";
        } 
        else {
            updatePara.id = "result_obese";
            updatePara.innerHTML = "BMI: " + bmi;
            resetRowColors();
            document.getElementById("row4").style.color = "tomato";
        }
    }
    // if no para exists, create a new para
    else {
        const newPara = document.createElement("p");
        if (bmi <= 18.4){
            newPara.id = "result_underweight";
            const highlightRow1 = document.getElementById("row1");
            highlightRow1.style.color = "tomato";
        }
        else if (bmi >= 18.5 && bmi <= 24.9){
            newPara.id = "result_normal";
            const highlightRow2 = document.getElementById("row2");
            highlightRow2.style.color = "#5cb800";
        }
        else if (bmi >= 25 && bmi <= 39.9){
            newPara.id = "result_overweight"; 
            const highlightRow3 = document.getElementById("row3");
            highlightRow3.style.color = "#e39924";
        }
        else {
            newPara.id = "result_obese";
            const highlightRow4 = document.getElementById("row4");
            highlightRow4.style.color = "tomato";
        }
        
        newPara.innerHTML = "BMI: " + bmi;
        document.getElementById('input_box').appendChild(newPara);
    }
}

function resetRowColors() {
    document.getElementById("row1").style.color = "";
    document.getElementById("row2").style.color = "";
    document.getElementById("row3").style.color = "";
    document.getElementById("row4").style.color = "";
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
