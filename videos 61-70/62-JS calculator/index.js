
// IMPORTANT NOTE: eval() allows you to execute a string of code as if it were actual JavaScript code.
// While it is a useful tool, it is a security risk. I would recommend using eval() ONLY for learning purposes and not any actual production code.


// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}