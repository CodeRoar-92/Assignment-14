// Define an array with some elements
let myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// Function to find the second largest element in the array
function findSecondLargest(arr) {
    // Initialize the largest and second largest to -Infinity
    let largest = -Infinity;
    let secondLargest = -Infinity;

    // Iterate over the array elements
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

// Call the function and pass the array
let secondLargestElement = findSecondLargest(myArray);

// Print the second largest element
console.log("Second largest element in the array:", secondLargestElement);
