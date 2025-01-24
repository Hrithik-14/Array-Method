function FRUITS(ARR){

   
    let fruits=ARR.at(2);
    console.log(fruits);
    
}
let ARR=[22.23,46,654,747,474,747];
FRUITS(ARR)



function food(arr){
    let food=arr.join(",");
    console.log(food);
    console.log(typeof food);
    
}
let array =["pizza","biriyani","mandhi","lays","shawarma"];
food(array)



function snack(arr) {

    console.log(arr.pop());
    console.log(arr);
    
}
snack(["1","2","3","4"]);

function number(arr1){

    
    console.log(arr1.push("rf"));
    console.log(arr1);
    
}
let arr2 =["1","2","3","@","3"]
number(arr2);


function shiftandUnshift(arr3){
    arr3.shift();
    console.log(arr3);

}
let arr3 =[1,2,34,56,67]
shiftandUnshift(arr3)

function shiftandUnshift(arr4){
    arr4.unshift(56);
    console.log(arr4);
}