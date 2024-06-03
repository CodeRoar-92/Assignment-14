// Define an array with some elements
let myArray = [1, 2, 3, 4, 5];

// Function to insert an element in the array at specified position
function insertElement(arr, element, position) {
    arr.splice(position, 0, element);
    return arr;
}

// Call the function to insert 10 at index 2
let updatedArray = insertElement(myArray, 10, 2);

// Print the updated array
console.log("Array after insertion:", updatedArray);
