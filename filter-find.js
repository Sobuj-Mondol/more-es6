const numbers = [1, 2, 8, 10, 25, 20, 5, 15, 56, 100, 98, 80, 70];
// const bignumbers = numbers.filter(number => number > 20);
const smallnumbers = numbers.filter(number => number < 20);
// console.log(smallnumbers);
let products = [
    {name: 'leptop', color: 'silver', storage: '1000gd', price: 20000},
    {name: 'headphone', color: 'black', price: 200},
    {name: 'mobile', color: 'skyblue', storage: '10gd', price: 10000},
    {name: 'sunglass', color: 'black', price: 100},
    {name: 'pen', color: 'blue', price: 5}
];
const expensive = products.filter(product => product.price > 100);
//
const black = products.filter(product => product.color == 'black');
//
const skyblue = products.find(product => product.color == 'skyblue');
console.log(skyblue);