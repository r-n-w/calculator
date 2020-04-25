// make better order of operations
// footer.

const add = (a, b) => a + b;
const subract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (a, b, operator) => {
    switch (operator) {
        case 'addition':
            return add(a, b);
        case 'subtraction':
            return subract(a, b);
        case 'multiplication':
            return multiply(a, b);
        case 'division':
            return divide(a, b);
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


let op;
let firstValue;
let secondValue;
// Functions defining what happens when each button is clicked.
function numberFunction(num) {
    if (results.innerHTML == 0) {
        results.innerHTML = num;
    } else {
        results.innerHTML = results.innerHTML + num;
    }
    let activeButton = numbers.find((number) => number.value == num);
    brightnessFlicker(activeButton.id);
}
function operatorFunction(operator) {
    firstValue = results.innerHTML;
    results.innerHTML = '0';
    op = operator.value;
    brightnessFlicker(operator.id);
}
function equalFunction() {
    secondValue = results.innerHTML;
    results.innerHTML = operate(firstValue, secondValue, op);
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
    results.innerHTML = 0;
    firstValue = null;
    secondValue = null;
    op = null;
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
        case '+':
            operatorFunction(operators[3]);
    }
});
