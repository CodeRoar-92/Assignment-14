// Define an array with some elements
let myArray = [1, 2, 3, 4, 5];

// Function to copy elements from one array to another
function copyArray(arr) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i]);
    }

    return newArray;
}

// Call the function and pass the array
let copiedArray = copyArray(myArray);

// Print the copied array
console.log("Copied array:", copiedArray);
