// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Breakdown the problem
//How to log an array back as a string
//How can i display  these values from max-min order in the string?
// function printForecast(arr) {
//   const sortedArray = [arr[0]]; // Initialize the sortedArray with the first temperature

//   for (let i = 1; i < arr.length; i++) {
//     const currentTemp = arr[i];
//     let inserted = false; // To track if the current temperature has been inserted

//     // Iterate through the sortedArray to find the correct position for the current temperature
//     for (let j = 0; j < sortedArray.length; j++) {
//       if (currentTemp < sortedArray[j]) {
//         sortedArray.splice(j, 0, currentTemp); // Insert the current temperature at the appropriate position
//         inserted = true;
//         break; // No need to continue checking once inserted
//       }
//     }

//     // If the current temperature is the largest so far, add it to the end
//     if (!inserted) {
//       sortedArray.push(currentTemp);
//     }
//   }

//   return sortedArray;
// }

// console.log(printForecast([17, 21, 23])); // Example input
// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}ºC in ${i + 1} days ... `;
//   }
//   console.log('...' + str);
// };
// printForecast(data1);
