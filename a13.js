// Define an array with some elements
let myArray = [1, 2, 3, 4, 5, 3, 2, 1, 4, 5, 1];

// Function to count duplicate elements in the array
function countDuplicates(arr) {
    let frequency = {};
    let duplicateCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            if (frequency[arr[i]] === 1) {
                duplicateCount++;
            }
            frequency[arr[i]]++;
        } else {
            frequency[arr[i]] = 1;
        }
    }

    return duplicateCount;
}

// Call the function and pass the array
let duplicateCount = countDuplicates(myArray);

// Print the count of duplicate elements
console.log("Total number of duplicate elements:", duplicateCount);
