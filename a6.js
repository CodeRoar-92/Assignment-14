// Define an array with some elements
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to count even and odd elements in the array
function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    return { evenCount, oddCount };
}

// Call the function and pass the array
let { evenCount, oddCount } = countEvenOdd(myArray);

// Print the counts
console.log("Total even elements:", evenCount);
console.log("Total odd elements:", oddCount);
