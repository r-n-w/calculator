// make better order of operations

const add = (x, y) => x + y;
const subract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const calculate = (x, y, operator) => {
    switch (operator) {
        case 'addition':
            return add(x, y);
        case 'subtraction':
            return subract(x, y);
        case 'multiplication':
            return multiply(x, y);
        case 'division':
            return divide(x, y);
    }
};
const numbers = [
    { id: document.querySelector('#one'), value: '1' },
    { id: document.querySelector('#two'), value: '2' },
    { id: document.querySelector('#three'), value: '3' },
    { id: document.querySelector('#four'), value: '4' },
    { id: document.querySelector('#five'), value: '5' },
    { id: document.querySelector('#six'), value: '6' },
    { id: document.querySelector('#seven'), value: '7' },
    { id: document.querySelector('#eight'), value: '8' },
    { id: document.querySelector('#nine'), value: '9' },
    { id: document.querySelector('#zero'), value: '0' },
    { id: document.querySelector('#decimal'), value: '.' },
];
const operators = [
    { id: document.querySelector('#divide'), value: 'division' },
    { id: document.querySelector('#multiply'), value: 'multiplication' },
    { id: document.querySelector('#subtract'), value: 'subtraction' },
    { id: document.querySelector('#add'), value: 'addition' }
];
 
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const equal = document.querySelector('#equal');


let a,b,c,previousOperator,prePreviousOperator = null;
let operated = false;
// Functions defining what happens when each button is clicked.
function numberFunction(num) {
    if (results.innerHTML == 0 || operated == false) {
        results.innerHTML = num;
        operated = true;
    } else {
        results.innerHTML = results.innerHTML + num;
    }
    let activeButton = numbers.find((number) => number.value == num);
    brightnessFlicker(activeButton.id);
}
function operatorFunction(operator) {
    // 3/4 times:
    if (
        (operator.value == 'multiplication' || operator.value == 'division') &&
        (previousOperator == 'addition' || previousOperator == 'subtraction')
        ) {
        c = parseFloat(results.innerHTML);
        a = b = results.innerHTML = calculate(b,c,previousOperator);
        prePreviousOperator = previousOperator;
        previousOperator = operator.value;
    }

    // 1/4 times if op = */ and pre = +- then:

    b = parseFloat(results.innerHTML);
    a = a
    c = null
    operated =  false
    prePreviousOperator = previousOperator;
    previousOperator = operator.value;





    if (operator.value == 'multiplication' || operator.value == 'division') {
        if (previousOperator == 'addition' || previousOperator == 'subtraction') {
            b = parseFloat(results.innerHTML);
        } else if (previousOperator == 'multiplication' || previousOperator == 'division') {
            c = parseFloat(results.innerHTML);
            results.innerHTML = calculate(b,c,previousOperator);
        }
    }
    if (previousOperator == 'multiplication' || previousOperator == 'division') {
        b = 1;
    }
    
    
    if (operator.value == 'addition' || operator.value == 'subtraction') {
        results.innerHTML = calculate(b,c,previousoperator)
        a = results.innerHTML;
        b = a;
    }

    prePreviousOperator = previousOperator;
    previousOperator = operator.value;
    operator = false;






    // b = parseFloat(results.innerHTML);
    // console.log(a);
    // console.log(b);
    // console.log(previousOperator);
    // results.innerHTML = calculate(a,b,previousOperator);
    // prePreviousOperator = previousOperator;
    // previousOperator = currentOperator;
    // currentOperator = operator.value;
    // a = parseFloat(results.innerHTML);
    // operated = false;
    // brightnessFlicker(operator.id);
}
function equalFunction() {
    b = parseFloat(results.innerHTML);
    console.log(a);
    console.log(b);
    console.log(currentOperator);
    results.innerHTML = calculate(a, b, currentOperator);
    a,b,c,previousOperator,prePreviousOperator = null;
    brightnessFlicker(equal);
}
function backspaceFunction() {
    if (results.innerHTML.length === 1) {
        results.innerHTML = 0;
    } else {
        results.innerHTML = results.innerHTML.substring(
            0,
            results.innerHTML.length - 1
        );
    }
    brightnessFlicker(backspace);
}
function clearFunction() {
    a,b,c,previousOperator,prePreviousOperator = null;
    results.innerHTML = 0;
    brightnessFlicker(clear);
}

function brightnessFlicker(button) {
    setTimeout(addHighlight.bind(this, button), 0);
    setTimeout(removeHighlight.bind(this, button), 200);
}
function addHighlight(button) {
    button.classList.add('highlight');
}
function removeHighlight(button) {
    button.classList.remove('highlight');
}

//Assign Event listeners
numbers.forEach((number) => {
    number.id.addEventListener(
        'click',
        numberFunction.bind(this, number.value)
    );
});
operators.forEach((operator) => {
    operator.id.addEventListener(
        'click',
        operatorFunction.bind(this, operator)
    );
});
equal.addEventListener('click', equalFunction);
backspace.addEventListener('click', backspaceFunction)
clear.addEventListener('click', clearFunction);


window.addEventListener('keydown', (e) => {
    if (!isNaN(e.key) || e.key == '.') {
        numberFunction(e.key);
    }
    switch (e.key) {
        case '=':
            equalFunction();
            break;
        case 'Enter':
            equalFunction();
            break;
        case 'Backspace':
            backspaceFunction();
            break;
        case 'Delete':
            clearFunction();
            break;
        case '/':
            operatorFunction(operators[0]);
            break;
        case '*':
            operatorFunction(operators[1]);
            break;
        case '-':
            operatorFunction(operators[2]);
            break;
        case '+':
            operatorFunction(operators[3]);
            break;
    }
});
