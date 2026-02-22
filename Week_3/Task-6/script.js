//  Alert on Button Click
function showAlert() {
    alert("Button was clicked successfully!");
}

//  Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("All fields are required!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

//  Simple Calculator
function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else {
        result = "Invalid Operator";
    }

    document.getElementById("result").innerText = "Result: " + result;
}

// Change Text on Click
function changeText() {
    document.getElementById("text").innerText = "Text has been changed!";
}
