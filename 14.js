function calc(action, a, b) {
    if (action == '+') {
        return (+a + +b === 0) ? 0 : +a + +b || 'error';
    } else if (action == '-') {
        return (+a - +b === 0) ? 0 : +a - +b || 'error';
    } else if (action == '*') {
        return (+a * +b === 0) ? 0 : +a * +b || 'error';
    } else if (action == '/') {
        return (+a / +b === 0) ? 0 : +a / +b || 'error';
    } else {
        return 'unexpected operation';
    }

}

const prompt = require('prompt-sync')();
 
let mathAction = prompt('Operation: ');
let first = prompt('a: ');
let second = prompt('b: ');

console.log('a = ' + first);

if (mathAction == undefined || first == '' || second == ''){
    
    console.log('Error');

} else {

    console.log(calc(mathAction, first, second));

}