// Define an array with some elements
let myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// Function to find the maximum and minimum elements in the array
function findMaxMin(arr) {
    // Initialize max and min with the first element of the array
    let max = arr[0];
    let min = arr[0];

    // Iterate over the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { max, min };
}

// Call the function and pass the array
let { max, min } = findMaxMin(myArray);

// Print the maximum and minimum elements
console.log("Maximum element in the array:", max);
console.log("Minimum element in the array:", min);
