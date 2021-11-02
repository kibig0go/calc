function calc(action, a, b) {

    switch (action) {
        case '+': 
            return ((+a + +b === 0) ? 0 : +a + +b || 'error');
            break;
        case '-': 
            return (+a - +b === 0) ? 0 : +a - +b || 'error';
            break;
        case '*': 
            return (+a * +b === 0) ? 0 : +a * +b || 'error';
            break;
        case '/': 
            return (+a / +b === 0) ? 0 : +a / +b || 'error';
            break;
        default:
            console.log('not an operator');
            return 'try again';
    }

}

const prompt = require('prompt-sync')();
 
let mathAction = prompt('Operation: ');
let first = +prompt('a: ');
let second = +prompt('b: ');


if (mathAction == '' || first == '' || second == ''){
    
    console.log('some empty input');

} else {

    console.log(calc(mathAction, first, second));

}