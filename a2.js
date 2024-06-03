// Define an array with some elements including negative numbers
let myArray = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];

// Function to print negative elements of the array
function printNegativeElements(arr) {
    console.log("Negative elements in the array:");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            console.log(arr[i]);
        }
    }
}

// Call the function and pass the array
printNegativeElements(myArray);
