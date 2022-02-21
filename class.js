class Support {
    name ;
    designation = 'Support Web Dev';
    address = 'Bangladesh'
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, this.address, 'start a support session');
    }
}

const sobuj = new Support('Sobuj', 'Bangladesh');
const mondol = new Support('Mondol', 'Dubai');
const akash = new Support('Akash', 'Maldip');
sobuj.startSession();
mondol.startSession();
akash.startSession();
console.log(sobuj, mondol, akash);