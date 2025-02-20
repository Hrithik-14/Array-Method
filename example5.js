const obj = {
    name: "arun",
    age: 25,
    address:{
        city: "kochi",
        state:"kerala"
    }
}
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

