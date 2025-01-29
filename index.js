
// }
// let arr=[1,2,34,56,6]
// shiftandUnshift(arr);

// function copy(arr){
//     arr.copyWithin(1,3)
//     console.log(arr);
//     arr.copyWithin(0,3)
//     console.log(arr);
    
    
// }
// let arr=[1,23,4,5,67];
// copy(arr)


// function flatered(arr){
    
//     console.log(arr.flat());
    
// }
// let arr=[[1,2],[3,4],[7,8]]
// flatered(arr)


// function flatered(arr){
//     console.log(arr.flat(Infinity));
    
// }
// let arr=[1,23,[4,5667,75],75,443,[1,3,4],[23,442,42]]
// flatered(arr)


// function sortMethod(arr){
//     arr.sort();
//     console.log(arr);
    
// }
// let arr=["orange","apple","mango","kiwi","strawberry"]
// sortMethod(arr)





// function name(){
//     let arr =["lalu","manu","abhi","kuku"];
//     arr.sort();
//     console.log(arr);
    
// }
// name()


// function number(){
//     let num=[6,3,83,93,3,8,10];
//     num.sort(compareFunction);
//     console.log(num);
//     function compareFunction(a,b){
//         return a-b;
//     }
    
// }
// number()




// function sortnumber12(num){
//     num.sort((a,b)=> {return a-b});
//     console.log(num);
    
// }
// let num=[1,2,46,78,10,37,23];
// sortnumber12(num);



// function Sortname(){
//     let company =[
//         {
//             name:'kuku',
//             date: 2003

//         },
//         {
//             name:'abhi',
//             date: 2000
//         },
//         {
//             name:'lalu',
//             date: 1998
//         },
//         {
//             name:'sneha',
//             date: 2002
//         }
//     ];
//     company.sort((a,b)=>{
//         return a.date - b.date;
//     });
//     console.log(company);
    
// }
// Sortname()


// function Number(n){
//     let num = n.filter(n =>{return n<=0});
//     console.log(num);
    
// }
// let n=[11,-3,4,5,7,85,-657,-57,0]
// Number(n)


// function WOrds(str1,str2){

//     for(let i=0;i<str1.length;i++){
//         if()
//     }
    
// }
// console.log(WOrds("heart","earth")); 




// function isPrime(n){
//     n.map(a=> {n%a!==0
//         return true;
//     });
//     return false;
// }
// console.log(isPrime(2))


// var lengthOfLastWord = function(s) {
//     let str = s.substr();
//     console.log(str)
// };
// lengthOfLastWord("Hello World")


// const nums = function(){
//     console.log("hello");
    
// }
// nums();

// const add = (x,y)=>{
//     console.log(x+y);
// }
// add(3,5)
// OrderNjumber(function(){
//     console.log("hello");
    
// },);



// setTimeout(function(){
//     console.log("Hello");
    
// },3000)
// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square)

// console.log(squares);

// function square(element){
//     return Math.pow(element, 2);
// }


// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// })

// console.log(squares);




// const arr =[1,2,3,4,5,6,7,8,9,10];



// const cubes = arr.map(function(element){
//     return Math.pow(element, 3)
// });

// console.log(cubes);


// function cubes(element){
//     return Math.pow(element,3)
// }
// console.log(cubes(5))


// function outer() {
//     let outerVar = "Outer variable";
//     function inner() {
//         console.log(outerVar); 
//     }
//     inner();
// }
// outer();


// function fact(nums){
//     if(nums==0){
//         return 1;
//     }
//     else{
//         return nums*fact(nums-1);
//     }
// }
// console.log(fact(5))




// function getAverage(...numbers){
//     let result=0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result/numbers.length
// }

// let total=getAverage(30,45,75,24,97,10,45,97,30,24==);

// console.log(total);



// let numbers=[12,33,45,785,857,6765]

// let maximum = Math.max(...numbers)


// console.log(maximum);





// let username="Hrithik";

// let letters=[...username].join("-")


// console.log(letters);



// let fruits=["apple","orange","grapes"];

// let vegetables =["carrots","potato","tomato"]

// let foods = [...fruits,...vegetables,"milk","bread","eggs"];

// console.log(foods);





// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age : 23,
//     isEmployedyed:true
// };

// const person2={
//     firstName: "ashoke",
//     lastName: "Selvem",
//     age : 26,
//     isEmployed:false
// };
// console.log(person2);


// let laptop = {
//     brand:'hp',
//     owner:'ashin',
//     ram: '16',
//     greet:function(){
//         console.log("Hello World");
        
//     }
// }
// laptop.greet();




// const person = {
//     name:"ashin",
//     age: 23,
//     gender:"male"
// }

// function DetailePerson({name,age,gender}){
//     console.log(`The name is ${name}, age is ${age} and gender is ${gender}`);
    
// }
// DetailePerson(person);


// const colors = ["red","blue","green","yellow","orange"];


// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);





// function MinimumNumber(arr){
//     console.log(Math.min.apply(null,arr));
    
// }
// MinimumNumber([11,23,55,74,74,5,1])




// function MaximumNumber(arr){
//     console.log(Math.max.apply(null,arr));
    
// }

// MaximumNumber([11,23,55,74,74,5,1])


// var mySqrt = function(x) {
//     let nums= Math.pow(x, 0.5);
//     let result= nums.toFixed(0);
//     return result;
// };
// console.log(mySqrt(4));
// console.log(mySqrt(8));




// function personFactory(firstName, lastName){

// }


// let x=3.19,y=32,z=35,Maximum;



// x= Math.floor(x);

// x= Math.round(x);

// x= Math.ceil(x);

// x=Math.pow(x, 2);

// x=Math.sqrt(x);

// x= Math.abs(x)

// Maximum=Math.max(x,y,z)
// console.log(Maximum);




// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let squares = numbers.map(square);

// console.log(squares);


// function square(element){

//     return Math.pow(element,3)

// }












// let arr1 =["kerala","Malayalam",100000,["tvr","cvr","cnm"]];


// let state = arr1[0];
// let language=arr1[1]
// let population=arr1[2]



// let [state,population,language,[a1,a2,a3]]= arr1



// console.log(state);
// console.log(language);
// console.log(population);
// console.log(a1);
// console.log(a2);
// console.log(a3);



// const numbers = [1,2,3,4,5];





// numbers.forEach(Printfunction)
// function Printfunction(number){
//     console.log(number*2);
    
// }


// const nums = (a,b) => a ===100 && b===100;



// console.log(nums(100,0));

// console.log(nums(100,100));

// console.log(nums(0,10));





// function Extension(str){
//     let result = str.slice(str.indexOf(`.`))
//     console.log(result);
    
// }
// Extension("dfsmfdv.dmf")

// function dnfksd(x){
//     console.log(Math.random(x));
    
// }
// dnfksd()

// function Add(a,b){
//     return a+b;
// }
// console.log(Add(2,4))


// function AreaOfTriangle(a,b,c){
//     let s = (a+b+c)/2;

//     let num = s*(s-a)*(s-b)*(s-c);
//     let area = Math.sqrt(num)
//     console.log(area);
    
// }
// AreaOfTriangle(10,10,10)



// function SwappingNumbers(a,b){
//     a = a+b;
//     b = a - b;
//     a = a - b;
//     b = a - b;
//     console.log(a,b);
     
// }
// SwappingNumbers(1,2)



// function SwappingNumbers(a,b){
//     let temp = a;
//     a = b;
//     b = temp;

//     console.log(a,b);
    
// }
// SwappingNumbers(1,2)




// let name = {
//     firstName: "Akshay",
//     lastName: "Saini",
//     printFullName: function () {
//         console.log(this.firstName + " " + this.lastName);
        
//     }
// }
// name.printFullName()



// let name2 = {
//     firstName: "Sachin",
//     lastName: "Tendulkar"
// }

// name.printFullName.call(name2)


// let  myMap = new Map();
// myMap.set(1,"first")
// myMap.set(2,"second")
// myMap.set(3,"third")
// myMap.set(4,"fourth")

// console.log(myMap);


// for(let key of myMap.values()){
//     console.log(`Key is ${value}`);
    
// }





// for(let [key, value] of myMap){
//     console.log(`Key is ${key} and value is ${value}`);
    
// }




// let names= ["steve","elon","mark"];


// names.map((name)=> console.log(name));


// let datas = [
//     {
//         name: "Mr Bean1",
//         age:40
//     },
//     {
//         name: "Mr Bean2",
//         age:34
//     }
// ]

// datas.map((data) => console.log(data.name));


// function sayHello(){
//     return "Hello";
// }

// function mainFunction(argFn, name){
//     console.log(argFn(), name);
    
// }

// mainFunction(sayHello, "John")


// function add(){
//     return function (){
//         console.log(`added`);
        
//     }
// }

// const greeting = () => {
//     console.log("Hello, world")
    
// }
// greeting();




// const countDown = (num) => {
//     for(let i = num; i >= 0; i--) {
//         console.log(i);
        
//     }
// }
// countDown(7)




// function FactorialNumbers(num){
//     if(num == 1 || num == 0){
//         return 1;
//     }
//     else{
//         return num * FactorialNumbers(num - 1);
//     }

// }
// console.log(FactorialNumbers(2))
// console.log(FactorialNumbers(3))
// console.log(FactorialNumbers(4))
// console.log(FactorialNumbers(5))


// let num = Math.random()


// console.log(num);



// let nums = (arr) => {
//     for(let x of arr){
//         console.log(x);
        
//     }
// }
// nums( ["adas","bkds","sbk"])




// const student =
// {
//     name: "John Doe",
//     age: 20,
//     grade: "A",
//     subject: "Mathematics"
//   };
 
// let {name:a,b,c,d} = student;
// console.log(a);


// let result = student.reduce((a,b) => a + b.age,0)
  
// console.log(result);


//   for (const key in student) {
//     console.log(`${key}: ${student[key]}`);

//   function add(a,b){
//     console.log("a+b)
//   }

// add(2,3)



// let arr =["apple","banana","orange"];


// let [grape,banana,orange] = arr

// console.log(grape);



// let obj1 = {
//     name : "Javeed",
//     age : 24
// };

// let {name ,age} = obj1;

// console.log(name);




//hoisting

// var a = 4;

// syk()

// function syk(){
//     console.log(a);
    
// }

// (function() {
//     console.log('IIFE is running!');
//   })
//   ();
//   const user = { name: 'John', age: 30 };
// const { name, age } = user;
// console.log(name); // John


// const name = {
//   greet:function(){
//     console.log("Hello");
//   }
// }
// name.greet();



// const person = {
//   firstName: 'Alice',
//   lastName: 'Brown',
// };

// function greet(greeting) {
//   console.log(`${greeting}, ${this.firstName} ${this.lastName}`);
// }

// const sayHello = greet.bind(person, 'Hello');
// sayHello(); 




// const person = {
//   firstName: 'Jane',
//   lastName: 'Smith',
// };

// function greet(greeting, punctuation) {
//   console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
// }

// greet.apply(person, ['Hi', '!']); 



// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

// function greet(greeting) {
//   console.log(`${greeting}, ${this.firstName} ${this.lastName}`);
// }

// greet.call(person, 'Hello'); 





// console.log(Greet());


// function Greet(){
//   return "Hello, World!";
// }



// let arr = [1,2,3,4,5]


// for(x of arr){
//   console.log(x);
  
// }

// let students = {
//   name: 'John',
//   age: 20,
  
// }

// for(x in students){
//   console.log(students[x]);
// }

// function doubled(x){
//   return x*2;
// }

// const arr = [1,2,3,4,5];

// let result =arr.map(doubled);

// console.log(result);





// let num = [1,2,3,4,5,6,7,8]



// let result = num.filter(a => a%2 == 0);

// console.log(result);



// let sum = num.reduce((a,b) => a+b,0);
// console.log(sum);



// let arr = ["orange","banana","apple"]


// let result = arr.sort()

// console.log(result);


// let arr = [34,22,89,44,53,10,20,90];


// let result = arr.sort((a,b) =>{
//   return b-a
// });

// console.log(result);

// let arr= [1,23,45,77];

// let result = arr.map(a =>  a*2);
// console.log(result);



// let resu = arr.forEach(a => console.log(a*2));


//closure

// function Outer(){

//   let  a = 2;


//   function inner(){
//     console.log(a);
    
//   }
//   inner()
// }
// Outer();


//Hoisting

// Greet()
// function Greet(){
//   console.log("Hello");
// }













// let arr = ["apple","orange","grapes"]



// let [f1,f2,f3] = arr;


// console.log(f1);
// console.log(f2);











// let arr = [22,45,90,56,424]


// let result = arr.sort((a,b) => a-b)


// console.log(result);


// let res = arr.sort((a,b) => b-a)

// console.log(res);




// let obj = [{
//     name:"Rahul",
//     age:25,
//     city:"Delhi",
//     country:"India"
// },
// {
//     name:"Amal",
//     age:23,
//     city:"kochi",
//     country:"India"
// }];

// let ressult = obj.map((a,b) => a + b.age);


// class  Products{
//     constructor(name,price){
//         this.name = name;
//         this.price = price; 
//     }
//     displayProduct(){
//         console.log(`Product ${this.name}`);
//         console.log(`Price  ${this.price}`);
//     }
// }

































