
// Exercise 1
function calculate (a, b){
    if(a===b){
     return "ტოლია"
    }
    return  "არ არის ტოლი"
    
 }
 
 console.log(calculate (80,80))
 console.log(calculate ('80',80))



 
// Exercise 2


function celsiusCnvrt (fahrenheit){
    let celsius
    celsius = (5/9 * (fahrenheit-32))
    console.log(celsius)
   

}

celsiusCnvrt (100)
celsiusCnvrt ('a')



// Exercise 3
 
function calculate (a,b){
   
    if (typeof a === 'string'){
     return false
    }
      
   return a+b
 }
 console.log (calculate(50,70))
 console.log (calculate('giga',70))