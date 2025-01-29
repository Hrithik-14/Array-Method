// function outer(){
//     let a = 4;

//     function inner(){
//         console.log(a);
        
//     }
//     inner();
// }
// outer();


// x = 55.199;

// let result = Math.trunc(x);
// console.log(result);


// class Product{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }
//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price}`);
        
        
//     }
//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax)
//     }
// }
// const salesTax = 0.05;

// const product1 = new Product("Shirt",19.99);
// const product2 = new Product("Pans",22.50);
// const product3 = new Product("Shirt",100.00);

// product3.displayProduct()

// const total = product2.calculateTotal(salesTax);
// console.log(`Total price (with tax): ${total.toFixed(2)}`);


// var findMedianSortedArrays = function(nums1, nums2) {

//     let merge = nums1.concat(nums2);
//     let result = merge.sort((a,b) => a-b);
//     let ans = (result[0] + result[result.length - 1])/2;
//     ans = ans.toFixed(5)
//     console.log(ans)
// };
// findMedianSortedArrays([1,3],[2])
// findMedianSortedArrays([1,2],[3,4])



var isPalindrome = function(x) {
    for(let i = 0;i<x.length;i++){
        for(let j = x.length-1;i>=0;i--){
            if(x[0]=-){
                return -;
            }
            if(x[i] === x[j]){
                return true;
            }
            
        }
    }
   return false 
};
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))












