// Write a program that finds the largest element in a given array using a loop.co
const arr = [4,22,1,44,6,7]

let largest= arr[0];


for(let i =0; i<arr.length; i++){
    if(arr[i] > largest){
        largest= arr[i];
    }
}
console.log(`The largest element in the array is: ${largest}`);