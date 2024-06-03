// Define an array with some elements
let myArray = [1, 2, 3, 4, 5, 3, 2, 1, 4, 5, 1];

// Function to print unique elements in the array
function printUniqueElements(arr) {
    let uniqueElements = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            uniqueElements.push(arr[i]);
        }
    }

    return uniqueElements;
}

// Call the function and pass the array
let uniqueElements = printUniqueElements(myArray);

// Print the unique elements
console.log("Unique elements in the array:", uniqueElements);
