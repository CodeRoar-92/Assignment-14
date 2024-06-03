// Define an array with some elements
let myArray = [1, 2, 3, 4, 5];

// Function to find the sum of all elements in the array
function sumArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Call the function and pass the array
let totalSum = sumArrayElements(myArray);

// Print the sum of the array elements
console.log("Sum of all array elements:", totalSum);
