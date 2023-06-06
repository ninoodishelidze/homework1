
// // Exercise 1
function calculate (a, b){
    if(a===b){
     return "ტოლია"
    }
    return  "არ არის ტოლი"
    
 }
 
 console.log(calculate (80,80))
 console.log(calculate ('80',80))



 
// // Exercise 2


function celsiusCnvrt (fahrenheit){
    if(typeof fahrenheit !== 'number') return false;
    return (fahrenheit -32) /1.8;
  

}

console.log(celsiusCnvrt(80))
console.log(celsiusCnvrt('a'))



// Exercise 3
 
function calculate (a, b, op){
    if(typeof a !== 'number'  ||  b !== 'number' ) return false;
  switch (op) {
    case '+': return a+b;
    case '-': return a-b;
    case '*': return a*b;
    case '/': return a/b;
    default : return false;    
     
  }

}
console.log(calculate(10,7,'`'));
