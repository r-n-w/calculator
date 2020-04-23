// Add a real divide symbol
// Add a backspace icon
// make arrow be a finger when you mousover
// figure out the plus/minus
// give feadback when buttons are pressed.


const add = (a, b) => a + b;
const subract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (a, b, operator) => {
    switch (operator) {
        case 'addition':
            return add(a,b);
        case 'subtraction':
            return subract(a,b);
        case 'multiplication':
            return multiply(a,b);
        case 'division':
            return divide(a,b);
    }
}
const numbers = [
    {id: document.querySelector('#one'), value: '1'},
    {id: document.querySelector('#two'), value: '2'},
    {id: document.querySelector('#three'), value: '3'},
    {id: document.querySelector('#four'), value: '4'},
    {id: document.querySelector('#five'), value: '5'},
    {id: document.querySelector('#six'), value: '6'},
    {id: document.querySelector('#seven'), value: '7'},
    {id: document.querySelector('#eight'), value: '8'},
    {id: document.querySelector('#nine'), value: '9'},
    {id: document.querySelector('#zero'), value: '0'},
    {id: document.querySelector('#decimal'), value: '.'}
];
const operators = [
    {id: document.querySelector('#divide'), value: 'division'},
    {id: document.querySelector('#multiply'), value: 'multiplication'},
    {id: document.querySelector('#subtract'), value: 'subtraction'},
    {id: document.querySelector('#add'), value: 'addition'},
];
const clear = document.querySelector('#clear');
const plusMinus = document.querySelector('#plusMinus');
const percent = document.querySelector('#backspace');
const equal = document.querySelector('#equal');

let op;
let firstValue;
let secondValue;

numbers.forEach(number => {
    number.id.addEventListener('click', numberFunction.bind(this,number.value));
});

operators.forEach(operator => {
    operator.id.addEventListener('click', operatorFunction.bind(this,operator.value));
})
equal.addEventListener('click', equalFunction);
clear.addEventListener('click', () => {
    results.innerHTML = null;
    firstValue = null;
    secondValue = null;
    op = null;
})
function numberFunction(num) {
    results.innerHTML = results.innerHTML + num;
}
function operatorFunction(operator) {
    firstValue = results.innerHTML;
        results.innerHTML = '';
        op = operator;
        console.log(op);
        
}
function equalFunction() {
    secondValue = results.innerHTML;
    console.log(firstValue);
    console.log(secondValue);
    console.log(op);
    console.log(operate(firstValue,secondValue,op));    
    results.innerHTML = operate(firstValue,secondValue,op);
}
function backspaceFunction() {
    results.innerHTML = results.innerHTML.substring(0, results.innerHTML.length - 1);
}
function clearFunction() {
    results.innerHTML = null;
}
function plusMinusFunction() {
    results.innerHTML = - results.innerHTML;
}

window.addEventListener('keydown', (e) => {
    if (!isNaN(e.key) || e.key == '.') {
        numberFunction(e.key);
    }
    switch(e.key){
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
            operatorFunction('division');
            break;
        case '*':
            operatorFunction('multiplication');
            break;
        case '-':
            operatorFunction('subtraction');
        case '+':
            operatorFunction('addition');
    }
    console.log(e);  
});
// window.addEventListener('keydown', (e) => {
//     if (!isNaN(e.key) || e.key == '.') {
//         numberFunction(e.key);
//         console.log(e.key);  
//     }
// })
// window.addEventListener('kedown')


let symbol = 'division';

console.log(operate(2,5,symbol));
