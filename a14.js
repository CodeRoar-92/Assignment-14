// Define an array with some elements
let myArray = [1, 2, 3, 4, 5, 3, 2, 1, 4, 5, 1];

// Function to delete duplicate elements from the array
function deleteDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Call the function and pass the array
let uniqueArray = deleteDuplicates(myArray);

// Print the array after deleting duplicates
console.log("Array after deleting duplicates:", uniqueArray);
