const prompt = require('prompt-sync')();
 
let action = prompt('Operation: ');
let a = +prompt('a: ');
let b = +prompt('b: ');


function calc(action, a, b) {
    
    if ( isNaN(a) || isNaN(b) ) {
        return 'error';
    } else {
            if (b === 0) {
                ans = "Division by zero";
            } else {
                ans = a / b;
            }
        const operations = {
            sum: a + b,
            sub: a-b,
            multi: a*b,
            div: ans,
        }
        
        if (action in operations){
           return operations[action]; 
        } else {
            return 'not an operator';
        }
        
    }

}

console.log(calc(action, a, b));


