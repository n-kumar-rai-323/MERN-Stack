const numbers = [1, 2, 3, 4, 5];

numbers.forEach((value, index, array) => {
    
    array[index] = value * 2; // Double each number
});

console.log(numbers); // Output: [2, 4, 6, 8, 10]

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit, index, a) => {
    a[index]= fruit + "Nishan"
});
console.log(fruits)
