// Define an array with some elements
let myArray = [1, 2, 3, 4, 5];

// Function to delete an element from the array at specified position
function deleteElement(arr, position) {
    arr.splice(position, 1);
    return arr;
}

// Call the function to delete element at index 2
let updatedArray = deleteElement(myArray, 2);

// Print the updated array
console.log("Array after deletion:", updatedArray);
