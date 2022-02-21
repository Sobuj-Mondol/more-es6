const fish = {
    name: 'king hilsha',
    Id: 58,
    color: 'silver',
    phone: '10795345555',
    address: 'chandpur',
    price: 1000
};
// const phone = fish.phone;
const {name, id, color, phone, address, price} = fish;
console.log(color);
 // company object
 const company = {
     name: 'GP',
     ceo:{id: 10, name: 'bolod khan', food:'ghas'},
     web:{work: 'website devolment', employee: 22, framework: 'mongodb'}
 };
 const  { work, employee, framework} =company.web;
console.log(work, employee, framework);