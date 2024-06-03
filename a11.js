// Define an array with some elements
let myArray = [1, 2, 3, 4, 5, 3, 2, 1, 4, 5, 1];

// Function to count frequency of each element in the array
function countFrequency(arr) {
    let frequency = {};

    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            frequency[arr[i]]++;
        } else {
            frequency[arr[i]] = 1;
        }
    }

    return frequency;
}

// Call the function and pass the array
let frequency = countFrequency(myArray);

// Print the frequency of each element
console.log("Frequency of elements:", frequency);
