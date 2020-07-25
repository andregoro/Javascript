//Extending the Prototype
// let f=140;

// Number.prototype.toCelcius=function(){
//     return (this - 32) * 5/9;
// };
// //f.toCelcius();
// String.prototype.funcName
// alert(f.toCelcius());

//Array Map
// let numbers=[1,2,3,4,5];
// let newNumbers=numbers.map(n => n * 2);
// console.log(newNumbers);

//Array Reduce
// let numbers=[1,2,3,4,5];
// let newNumbers=numbers.reduce(function(acc,n){
//     return acc+n;
// });
// console.log(newNumbers);

//Array Filter
// let numbers=[1,2,3,4,5];
// let newNumbers=numbers.filter(n => n % 2 == 0);
// console.log(newNumbers);

//Maps in Javascript (Map Object)
// let zoo=new Map();
// zoo.set('Zebra',5);
// zoo.set('Gorilla',2);
// zoo.set('Monkey',80);
// let zobre=zoo.get('Zebra');
// console.log(zobre);
// for(let [key,value] of zoo){
//     console.log(key + ':' + value);
// }

//Enum Types
// const Direction={
//     UP:'UP',
//     DOWN:'DOWN',
//     LEFT:'LEFT',
//     RIGHT:'RIGHT'
// };
// function sayDirection(direction){
//     switch (direction) {
//         case direction.UP:
//             console.log('Up');
//             break;
//         default:
//             break;
//     }
// }
// sayDirection(Direction.UP);

//Object Destructuring
// const person={
//     name:'Andre',
//     age:21
// }
// let {name,age,gender='Unknown'}=person;
// console.log(name);
// console.log(age);
// console.log(gender);
// function printDetails({name,age}) {
//     console.log(`The name is ${name} and they are ${age}`);
// }
// printDetails(person);

//Array Destructuring
// let num=[1,2,3,4,5];
// let [one,two,three]=num;
// console.log(one);
// console.log(two);
// console.log(three);
// function bottle() {
//     return ['bottle','water'];
// }
// let [red,blue]=bottle();
// console.log(red);
// console.log(blue);

//Ternary Operator
// const grade=80;
// const result=(grade > 80) ? 'Distinction'
//         :(grade > 50) ? 'Pass' :'Fail';
// console.log(result);

//Default Values
// res =0 || '' ||60;
// console.log(res);

//Array 'forEach' method
// numbers =[1,2,3,4];
// numbers.forEach(element => {
//     console.log(element);
// });

//Array 'includes' method
// numbers =[1,2,3,4];
// console.log(numbers.includes(1));

//Template Literals
// names = 'Dom';
// console.log(`My name is ${names}`);

//Array 'every' method
// function isOver100(n){
//     return n > 100;
// }
// numbers =[1,2,3,4];
// console.log(numbers.every(isOver100));

//Array 'some' method
// const numbers=[10,50,75,105];
// function is(n) {
//     return n > 107;
// }
// console.log(numbers.some(is));

//Array 'find' method
// const people =[
//     {
//         name: 'Andre',
//         occupation:"Developer"
//     },
//     {
//         name: 'Jojo',
//         occupation:"Killer"
//     },
//     {
//         name: 'S',
//         occupation:"Killer"
//     },
//     {
//         name: 'Lulu',
//         occupation:"Hair Dresser"
//     }
// ];
// function is(person) {
//     return person.occupation==="Killer";
// }
// console.log(people.reverse().find(is).name);
// console.log(people.find(is).name);

//Array 'findIndex' method
// const people =[
//     {
//         name: 'Andre',
//         occupation:"Developer"
//     },
//     {
//         name: 'Jojo',
//         occupation:"Killer"
//     },
//     {
//         name: 'S',
//         occupation:"Killer"
//     },
//     {
//         name: 'Lulu',
//         occupation:"Hair Dresser"
//     }
// ];
// function is(person) {
//     return person.occupation==="Killer";
// }
// console.log(people[people.findIndex(is)]);

//Sets
// const mySet=new Set();
// mySet.add(60);
// mySet.add(21);
// mySet.add(58);
// mySet.add({
//     name:'Dom',
//     age:24
// });
// mySet.add("dcode");
// mySet.add(67.98);
// console.log("tamanho "+mySet.size);
// console.log("number 60 "+mySet.has(60));
// mySet.delete("dcode");
// for(let item of mySet){
//     console.log(item);
// }
// const myArra=Array.from(mySet);

//Array 'shift' method
// num=[1,2,3,4];
// num.shift();
// console.log(num);

//Array 'unshift' method
// num=[1,2,3,4];
// num.unshift(7);
// console.log(num);

//Array 'fill' method
// let myArray=["d","c","n","v"];
// console.log(myArray);
// myArray=myArray.map(()=>{
//     return {
//         name:"Dom",
//         pro:"Soft"
//     };
// });
// myArray.fill({
//     name:"Dom",
//     pro:"Soft"
// });
// myArray[0].name="nick";
// console.log(myArray);

//Array 'join' method
// let myArray=["d","c","n","v"];
// let st=myArray.join(" + ");
// console.log(st);

console.log('%cW','color:red;font-size:30px;');