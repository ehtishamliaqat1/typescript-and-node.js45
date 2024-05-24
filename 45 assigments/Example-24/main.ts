/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

// Equality
let string1: string = "Ehtisham";
let string2: string = "Ehtisham";
let string3: string = "Liaqat";
console.log(string1 === string2);  
console.log(string1 === string3);  

// Inequality
console.log(string1 !== string3);  
console.log(string1 !== string2);  

// Equality with toLowerCase()
let string4: string = "EHTISHAM";
console.log(string1 === string4.toLowerCase());  
console.log(string1 === string3.toLowerCase());  

// Inequality with toLowerCase()
console.log(string1 !== string4.toLowerCase());  
console.log(string1 !== string3.toLowerCase());  

// Equality and Inequality
let num1: number = 12;
let num2: number = 13;
let num3: number = 12;
console.log(num1 === num3);  
console.log(num1 === num2);  
console.log(num1 !== num2);  
console.log(num1 !== num3);  

// Greater than and Less than
console.log(num1 > num2);    
console.log(num1 < num2);    

// Greater than or equal to and Less than or equal to
console.log(num1 >= num3);   
console.log(num1 <= num2);   
console.log(num1 >= num2);   
console.log(num1 <= num3);   

// Using "and"
console.log((num1 < num2) && (num2 > num3));  
console.log((num1 > num2) && (num2 > num3));  

// Using "or"
console.log((num1 > num2) || (num2 > num3));  
console.log((num1 > num2) || (num2 < num3));  
