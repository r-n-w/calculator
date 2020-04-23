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

let symbol = 'division';

console.log(operate(2,5,symbol));
