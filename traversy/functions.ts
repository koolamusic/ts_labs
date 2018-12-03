// Functions in typescript can also utilize classes 
function getSum (num1:number, num2:number): number  {
  return num1 + num2;
}

// here we write a function whose arguments can only be numbers, and the return value of the function can only be a number

// Another Example 
let getName = (fname?: string, lname?: string): string => {
  if(fname == undefined && lname == undefined)
    return "No name defined";

  return `${fname} ${lname}`;
}

console.log(getName());