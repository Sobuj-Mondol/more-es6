const numbers = [10, 5, 15, 25, 50];
const output = [];
const multi = number => number * 2;
for(const number of numbers){
    const result = multi(number);
    output.push(result); 
};
// console.log(output);

// shortcut
// const result = numbers.map(number => number * 2);
// const result = numbers.map(x => x * 2);
// const result = numbers.map(x => x * x);    //squares
const result = numbers.map(multi);
console.log(result);