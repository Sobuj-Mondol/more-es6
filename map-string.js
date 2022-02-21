const names = ['sobuj', 'mondol', 'kumar', 'akash', 'batash'];
const lname = names.map(name => name.length);
console.log(lname);
//
let products = [
    {name: 'leptop', color: 'silver', storage: '1000gd', price: 20000},
    {name: 'headphone', color: 'black', price: 200},
    {name: 'mobile', color: 'skyblue', storage: '10gd', price: 10000},
    {name: 'sunglass', color: 'black', price: 100},
    {name: 'pen', color: 'blue', price: 5}
];
const productname = products.map(product => product.name);
const productcolor = products.map(product => product.color);
const productprice = products.map(product => product.price);
// console.log(productname, productcolor, productprice);
// map diye console.log kora 
products.map(product => console.log(product));
