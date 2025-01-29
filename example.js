var x = 10;
if(x%2==0) {
    console.log(x);
    console.log("even");
}



var a = 100
{
    var a =10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);


let num = 4;

num = String(num)

console.log(num, typeof num);
function outer(){
    inner()
}
function inner(){
    console.log("ghhgupue");
}
outer()


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const john = new Person("John", 30);
console.log(john.name); 

const person = {
    name: "Alex",
    age: 30,
    address: {
        city:"New York",
        zipCode: "10001"
    }
}


// shallow copy 1
const shallowCopy = {...person};
shallowCopy.address.city = "Los Angeles"


console.log(person.address.city);


// shallow copy 2

const shallowCopy = Object.assign({}, person);

shallowCopy.address.zipCode = "354895";

console.log(person.address.zipCode);


class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    ChangeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("chai", "chai@gmail.com","123")

class Bikes {
    constructor(model_name,colour,price){
        this.model_name = model_name;
        this.colour = colour;
        this.price = price;
    }
    bikeDetails(){
        console.log("Bike: " + this.model_name);
        console.log("Colour: " + this.colour);
        console.log("Price: " + this.price);
    }
    showPrice(){
        console.log("Price of " + this.model_name + "is " + this.price);
        
    }
}


// inheritance
// Base Class(Parent) - Bike
// Derived Class(Child) - SportsBike



class sportsBike extends Bikes{

}

let b1 = new Bikes("Hero Splendor Plus", "Red", 50000);
let b2 = new Bikes("Honda CB Shine", "Black", 60000);
let b3 = new Bikes("Bajaj Pulsar 150", "Blue", 70000)


let sp1 = new sportsBike("KTM RC 200","Yellow",80000)

sp1.showPrice()
b1.bikeDetails()



// Generator function

function* AddNumber(a,b){
    yield a+b;
}
let res = AddNumber(2,3);
console.log(res.next().value);


function* fun(){
    yield "Hello";
    yield "hi";
}
let resu = fun();
console.log(resu.next().value,resu.next().value);





function Add(a,b,c){
    return a+b+c;
}

console.log(Add(2,4,5))


Currying


function Add(a){
    return function (b){
        return function(c){
            return a + b + c
        }
    }
}
console.log(Add(7)(2)(3));



let mypromise = new Promise((resolve,reject) => {
    let success = true;
    setTimeout(() => {
        if(success){
            resolve("Operation successful")
        }
        else{
            reject("Operation failed")
        }
    },2000)
})
console.log(mypromise);





let myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulate success or failure
    setTimeout(() => {
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed!");
        }
    }, 2000);
});

console.log(myPromise);







function display(){

    return new Promise((resolve,reject)=>{
        if(3>5){
            setTimeout(()=>{resolve(`{name:"Hrithik",age:23}`);

            })
            
        }
        else{
            setTimeout(()=>{reject("this result is false")})
        }
       
    })

}


display().then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})



function displayOutput(x){
    return new Promise((resolve,reject)=>{
        if(x>10){
            setTimeout(()=>resolve(`${x} is greater than 10`))
        }
        else{
            setTimeout(()=>reject(`${x} is less than 10`))
        }
    })
}
displayOutput(5).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})




function StudentAge(age){
    return new Promise((resolve,reject)=>{
        if(age>18){
            setTimeout(()=>resolve(`Student ${age} is above 18`))
        }
        else if(age === 18){
            setTimeout(()=>resolve(`Student ${age} is equal to 18`))
        }
        else{
            setTimeout(()=>reject(`Student ${age} is below 18`))
        }
    })
}
StudentAge(18).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})



async function NameIndex(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("headings")
        },3000)
    })
    document.getElementById("heading").innerHTML= await promise
}
NameIndex()




(function(){
    fetch("https://fakestoreapi.com/products").then(responce=>{
        return responce.json()
    }).then((data)=>{
        console.log(data);
        
    })
})()







Memoization



function multiplyByTwo(){
    let cache = {};
    
    return function (num){
        if(num in cache){
            console.log(cache[num]);
            
        }
        else{
            console.log("long time");
            cache[num] = 2 * num;
            console.log(cache[num]);
            
        }
    } 
    
}

multiplyByTwo(8);
multiplyByTwo(8)

let multiplyByTwoObj = multiplyByTwo();

multiplyByTwoObj(8)
multiplyByTwoObj



// Generator function

function* multiplyByTwo(a,b){
    yield a+b;
}
let result = multiplyByTwo(2,5)
console.log(result.next().value);




function outer(){
    inner()
}
function inner(){
    console.log("Hey, hi from inner fn");
    
}

outer();






// stack overflow


function outer(){
    outer()
}
outer()


let p = fetch("https://fakestoreapi.com/products").then((a) =>{
    return a.json()
}).then((data)=> {
    console.log(data);
    
})







































