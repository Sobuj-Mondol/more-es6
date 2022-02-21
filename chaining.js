// array destructuring 
const [x, y,] = [10, 51, 15, 20];
console.log(x, y);
// object destructuring
const {name,address} = {
    name: 'sobuj',
    age:18,
    address:'Dhaka'
}
// chaining
const company = {
    name: 'GP',
    ceo:{
       id: 10,
       name: 'bolod khan',
       food:'ghas'
       },
    web:{
        work: 'website devolment',
        employee: 22,
        framework: 'mongodb'
    }
};
console.log(company.web.framework);