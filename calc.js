const prompt = require('prompt-sync')();
 
let operation = prompt('Введите операцию: ');
let a = prompt('Введите первое число: ');
let b = prompt('Введите второе число: ');

function calc(operation, a, b) {

    const allParameters =  (operation == '' || a == ''|| b == '' || isNaN(a) || isNaN(b));
    const divZero = ( +b == 0 && operation == 'div');
 
    if (allParameters) {
        console.log('Error');
        return;
    } else if (divZero) {
        console.log('Division by zero');
        return;
    }
        
    a = +a;
    b = +b;
    
    let operations = {
        sum: a + b,
        sub: a-b,
        mult: a*b,
        div: a/b,
        pow: a**b,
    }
    if (operation in operations) {
        
        console.log(operations[operation]);
        return;
    } else {
        console.log('unknown operation');
        return;
    }  
}

calc(operation, a, b);