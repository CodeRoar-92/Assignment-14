// Define an array with some elements including negative numbers
let myArray = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];

// Function to count negative elements in the array
function countNegativeElements(arr) {
    let negativeCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeCount++;
        }
    }

    return negativeCount;
}

// Call the function and pass the array
let negativeCount = countNegativeElements(myArray);

// Print the count of negative elements
console.log("Total negative elements:", negativeCount);
