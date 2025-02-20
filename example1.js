
// // Deep Copy:if we do any change in copy variable it doesn't
// // reflect in the original variable


// let origValue = 10;
// let copiedValues = origValue;

// console.log(origValue);
// console.log(copiedValues);

// copiedValues = 20;


// console.log(origValue);
// console.log(copiedValues);




// // Shallow Copy:if we change in copy variable and it reflect
// // in the original variable 
// const OriginalValues= {
//     name: "John",
//     age: 20
// }

// let copiedValue = OriginalValues;

// console.log(OriginalValues);
// console.log(copiedValue);

// copiedValue.name = "Peter";
// console.log(OriginalValues);
// console.log(copiedValue);



// JSon.stringify()-deepcopy




// let originalValue1 = {
//     name: "John",
//     age:23
// }

// let copiedValue1 =
// JSON.parse(
//     JSON.stringify(originalValue1)
// );

// console.log(originalValue1);

// console.log(copiedValue1);


// copiedValue1.name = "Peter";


// console.log(originalValue1);

// console.log(copiedValue1);








// const originalValue ={
//     name:"Amal",
//     age:24
// }

// let copiedValue =
// JSON.parse(
//     JSON.stringify(originalValue)
// )
// console.log(originalValue);
// console.log(copiedValue);


// copiedValue.name="Peter"

// console.log(originalValue);
// console.log(copiedValue);








// const person ={
//     name:"Arun",
//     age:25
// }


// let copiedValue =
// JSON.parse(
//     JSON.stringify(person)
// )

// console.log(person);


// console.log(copiedValue);


// copiedValue.name='Hrithik'

// console.log(person);

// console.log(copiedValue);













// const Person1 ={
//     Name:"Kiran",
//     Age:27,
//     Gender:"Male",
//     Job:"Developer"
// }

// let copiedPeople = 
// JSON.parse(
//     JSON.stringify(Person1)
// )

// console.log(Person1);

// console.log(copiedPeople);



// copiedPeople.Name = "Arjun";

// copiedPeople.Age = 24;

// console.log(Person);

// console.log(copiedPeople);







// // if a function in an object  and find the copy


// let Person= {
//     name: "John",
//     age:27,
//     getName: function(){
//         return this.name
//     },
//     address:{
//         city:"Delhi",
//         country:"India",
//     }
// }



// let copiedPerson = Object.assign({},Person)

// console.log(Person);

// console.log(copiedPerson);


// copiedPerson.address.city = "Kochi"


// console.log(copiedPerson);

// console.log(Person);




// const OriginalValue ={
//     name:"John",
//     age:24,
//     getname: function(){
//         return this.name;
//     },
//     address:{
//         city:"Mumbai",
//         country:"India"
//     }
    
// }

// let copyOriginalValue = {...originalValue}
// copyOriginalValue = {
//     ...copyOriginalValue,
//     address:{
//         ...copyOriginalValue.address,
//         city:"Kochi"
//     }
// }

// console.log(originalValue);


// console.log(copyOriginalValue);







// console.log(copyOriginalValue);


// console.log(originalValue);


// // Strict mode


// "use strict"

// let n = 05;
// console.log(n);



// function f1(){
//     console.log(`Let's go for a dinner`);
    
//     f2()
// }

// function f2(){
//     console.log(`Let's meet someone at collage`);
    
//     f3()
// }


// function f3(){

//     console.log(`I'am going home`);
    
//     f4()
// }

// function f4(){
//     console.log(`Lets go for a walk`);
    
//     f5()
// }

// function f5(){
//     console.log(`Lets go for a trip`);
    
//     throw new Error(`The code `)
// }

// f1()


// // Exceptional handling try and catch

// let result1 = 10;
// try {
//     console.log(res);
    
// }
// catch(error){
//     console.log(error);
    
// }


// setTimeout(()=>{
//     try{
//         console.log(hello);
        
//     }
//     catch(error){
//         console.log(error);
        
//     }
// },1000)







// let result2 = 10;
// try {
//     console.log(result2);
    
// }
// catch(error){
//     console.log(error);
    
// }
// finally{
//     console.log("finally executed");
    
// }




// let result = 10;
// try {
//     console.log(res);
    
// }
// catch(error){
//     console.log(error);
    
// }
// finally{
//     console.log(`Finally block executed`);
    
// }




// let number = "a";
// try{
//     if(isNaN(number)) {
//         throw new Error("Not a number");
        
//     }
//     else{
//         console.log("it is a number");
        
//     }
// } catch(error) {
//     console.log(error.message);
    
// }



// function f1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("Output"))
//     })
// }
// f1().then((data) =>{
//     console.log(data);
    
// })


// function f1(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>resolve("hello"))
//     })
// }
// f1().then((data)=>{
//     console.log(data);
    
// })






// const promise1 = new Promise((resolve,reject) => {
//     resolve(["Js","Java"]);
// })
// const promise2 = new Promise((resolve,reject) => {
//     resolve(["React","Angula"])
// })


// const allPromises = Promise.all([promise1,promise2]);

// allPromises
// .then((res) => {
//     console.log(res);
    
// })
// .catch((err) => {
//     console.log(err);
    
// })










// "use strict";

// let x = 5;
// console.log(x);






// const person ={
//     name:"John",
//     age:30,
//     address:{
//         street:"123 Main St",
//         city:"Anytown",
//         state:"CA",
//         zip:"12345"
//     }
// }

// // let deepCopy =JSON.parse(JSON.stringify(person))

// let shallowCopy = {...person}


// shallowCopy.address.city = "Kochi";

// console.log(shallowCopy);

// console.log(person);












// async function fetchProduct() {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products/1');
//       const data = await response.json(); 
//       console.log(data); 
//     } catch (error) {
//       console.error('Error:', error); 
//     }
//   }
  
//   fetchProduct();








// async function FetchProduct(){
//     try {
//         let res = await fetch('https://fakestoreapi.com/products/1');
//         let data = await res.json();
//         console.log(data);
        
//     } catch(error) {
//         console.error(error);
        
//     }
// }
// FetchProduct()




// try{
//     let result = 10;
//     console.log(res);
    
// }
// catch(error) {
//     console.log(error);
    
// }
// finally{
//     console.log("This will always execute, regardless of success or failure.");
// }



// function Add(a){
//     return function (b){
//        return a+b
//     }
// }
// console.log(Add(2)(3));

// function* General(){
//     yield 1;
//     yield 2;
//     }
//     let gen = General();
//     console.log(gen.next());
//     console.log(gen.next());
//     console.log(gen.next());
    









// Add(2,5);

// function Add(a,b){
//     console.log(a+b);
    

// }






// function multiply(){
//     let cache ={};
//     return function (num){
//         if(num in cache){
            
            
//             return cache[num]
//         }

//         let result = num*num;
//         cache[num] = result;
//         return result;
//     }
// }
// let memoizedmultiply = multiply()
// console.log(memoizedmultiply(5));
//  console.log(memoizedmultiply(5));
 

// function Multiply() {
//     let cache = {};
    
//     return function(num) {
//         if (num in cache) {
//             console.log( num);
//             return cache[num];
//         }


//         let result = num * num;
//         cache[num] = result;
//         return result;
//     };
// }

// const memoizedMultiply = Multiply();

// console.log(memoizedMultiply(5)); // Calculates and stores in cache
// console.log(memoizedMultiply(5)); // Fetches from cache
// console.log(memoizedMultiply(6)); // Calculates and stores in cache
// console.log(memoizedMultiply(5)); // Fetches from cache





// async function abc() {
//     let value = await fetch('https://fakestoreapi.com/products/1'); // Await fetch request
//     let res = await value.json(); // Await JSON conversion
//     console.log(res);
//     return res;
// }

// abc(); // Call the function






// async function Abcd(){
    // let value = await fetch('https://fakestoreapi.com/products/1');
//     let result = await value.json();
//     console.log(result);
    
// }
// Abcd()




// async function Review(){
//     try{
//     let ans = await fetch('https://fakestoreapi.com/products/1');
//     let result = await ans.json();
//     console.log(result);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// Review();




const obj = {
    name: "arun",
    age: 25,
    address:{
        city: "kochi",
        state:"kerala"
    }
}

// let deepCopy = JSON.parse(JSON.stringify(obj));

// deepCopy.address.city = "chennai";

let shallowCopy = {...obj}

shallowCopy.address.city = "chennai";

console.log(obj);

console.log(shallowCopy);


function  Greet(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("hello")
        })
    })
}
Greet().then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})




async function addb(){
    let value = await fetch('https://fakestoreapi.com/products/1');
    let result = await value.json();
    console.log(result);
    
}
addb()














