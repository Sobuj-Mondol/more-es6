class TemMember{
    name ;
    designation = 'Support Web Dev';
    address = 'Bangladesh'
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}
class Support extends TemMember {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession(){
        console.log(this.name, this.address, 'start a support session');
    }
}
//
class studentCare{
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    buildARoutine(student){
        console.log(this.name, 'Build a routine for', student)
    }
}
//
class NeptuneDev{
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    releaseApp(version){
        console.log(this.name, 'release a new version', version)
    }
}
//
const sobuj = new studentCare('Sobuj mondol', 'Bangladesh', 12);
const mondol = new Support('Mondol', 'Dubai', 5);
const akash = new Support('Akash', 'Maldip', 3);
sobuj.buildARoutine('Akmal');
const Momotaj = new NeptuneDev('Momotaj Begom', 'Maldip');
 
console.log(sobuj);