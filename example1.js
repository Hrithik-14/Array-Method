
// Deep Copy:if we do any change in copy variable it doesn't
// reflect in the original variable


let origValue = 10;
let copiedValues = origValue;

console.log(origValue);
console.log(copiedValues);

copiedValues = 20;


console.log(origValue);
console.log(copiedValues);




// Shallow Copy:if we change in copy variable and it reflect
// in the original variable 
const OriginalValues= {
    name: "John",
    age: 20
}

let copiedValue = OriginalValues;

console.log(OriginalValues);
console.log(copiedValue);

copiedValue.name = "Peter";
console.log(OriginalValues);
console.log(copiedValue);



JSon.stringify()-deepcopy




let originalValue1 = {
    name: "John",
    age:23
}

let copiedValue1 =
JSON.parse(
    JSON.stringify(originalValue1)
);

console.log(originalValue1);

console.log(copiedValue1);


copiedValue1.name = "Peter";


console.log(originalValue1);

console.log(copiedValue1);








const originalValue ={
    name:"Amal",
    age:24
}

let copiedValue =
JSON.parse(
    JSON.stringify(originalValue)
)
console.log(originalValue);
console.log(copiedValue);


copiedValue.name="Peter"

console.log(originalValue);
console.log(copiedValue);








const person ={
    name:"Arun",
    age:25
}


let copiedValue =
JSON.parse(
    JSON.stringify(person)
)

console.log(person);


console.log(copiedValue);


copiedValue.name='Hrithik'

console.log(person);

console.log(copiedValue);













const Person1 ={
    Name:"Kiran",
    Age:27,
    Gender:"Male",
    Job:"Developer"
}

let copiedPeople = 
JSON.parse(
    JSON.stringify(Person1)
)

console.log(Person1);

console.log(copiedPeople);



copiedPeople.Name = "Arjun";

copiedPeople.Age = 24;

console.log(Person);

console.log(copiedPeople);







// if a function in an object  and find the copy


let Person= {
    name: "John",
    age:27,
    getName: function(){
        return this.name
    },
    address:{
        city:"Delhi",
        country:"India",
    }
}



let copiedPerson = Object.assign({},Person)

console.log(Person);

console.log(copiedPerson);


copiedPerson.address.city = "Kochi"


console.log(copiedPerson);

console.log(Person);




const OriginalValue ={
    name:"John",
    age:24,
    getname: function(){
        return this.name;
    },
    address:{
        city:"Mumbai",
        country:"India"
    }
    
}

let copyOriginalValue = {...originalValue}
copyOriginalValue = {
    ...copyOriginalValue,
    address:{
        ...copyOriginalValue.address,
        city:"Kochi"
    }
}

console.log(originalValue);


console.log(copyOriginalValue);







console.log(copyOriginalValue);


console.log(originalValue);


// Strict mode


"use strict"

let n = 05;
console.log(n);



function f1(){
    console.log(`Let's go for a dinner`);
    
    f2()
}

function f2(){
    console.log(`Let's meet someone at collage`);
    
    f3()
}


function f3(){

    console.log(`I'am going home`);
    
    f4()
}

function f4(){
    console.log(`Lets go for a walk`);
    
    f5()
}

function f5(){
    console.log(`Lets go for a trip`);
    
    throw new Error(`The code `)
}

f1()


// Exceptional handling try and catch

let result1 = 10;
try {
    console.log(res);
    
}
catch(error){
    console.log(error);
    
}


setTimeout(()=>{
    try{
        console.log(hello);
        
    }
    catch(error){
        console.log(error);
        
    }
},1000)







let result2 = 10;
try {
    console.log(result2);
    
}
catch(error){
    console.log(error);
    
}
finally{
    console.log("finally executed");
    
}




let result = 10;
try {
    console.log(res);
    
}
catch(error){
    console.log(error);
    
}
finally{
    console.log(`Finally block executed`);
    
}




let number = "a";
try{
    if(isNaN(number)) {
        throw new Error("Not a number");
        
    }
    else{
        console.log("it is a number");
        
    }
} catch(error) {
    console.log(error.message);
    
}



function f1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Output"))
    })
}
f1().then((data) =>{
    console.log(data);
    
})


function f1(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>resolve("hello"))
    })
}
f1().then((data)=>{
    console.log(data);
    
})






const promise1 = new Promise((resolve,reject) => {
    resolve(["Js","Java"]);
})
const promise2 = new Promise((resolve,reject) => {
    resolve(["React","Angula"])
})


const allPromises = Promise.all([promise1,promise2]);

allPromises
.then((res) => {
    console.log(res);
    
})
.catch((err) => {
    console.log(err);
    
})
































