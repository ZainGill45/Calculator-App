
let currentInputString = "";
let mappedResult;

const calcScreenElement = document.querySelector("#calc-screen");
const calcButtonsElements = document.querySelectorAll(".calc-buttons");

const outputResult = () => {
    currentInputString.forEach(index => {
        if (!isNaN(index)) {
            console.log(index)
        }
    });
            currentInputString = "";
            calcScreenElement.innerText = currentInputString;
};

calcButtonsElements.forEach(element => {
    element.addEventListener('click', event => {
        if (event.target.innerText == "☣") {
            currentInputString = "";
            calcScreenElement.innerText = currentInputString;
            return;
        }

        if (event.target.innerText == "=") {
            outputResult();
            return;
        }

        currentInputString += event.target.innerText;
        calcScreenElement.innerText = currentInputString;
    });
});

// 200+12*3\6.25

// Devide 3 by 6.25 get 0.48
// Multiple 12 by 0.48 get 5.76
// Add 200 to 5.76 get 205.76

// How to calculate the output for given equation
// 1. Loop through each of indexes within the string array
// 2. foreach of the indexes test whether it is an int, float, special math operator.
// 3. If it is a int or float convert said value to a number and start making an equation
// 4. When math operators come up add them to the equation
// 5. At the final index make the newly made equation equal to variable
// 6. Convert the variable to a string and display it on the output 