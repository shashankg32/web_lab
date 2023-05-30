//Write a function numTest that takes a number as an argument and returns a Promise
//that tests if the value is less than or greater than the value 20.

//start

function numTest(num) {
  return new Promise(function(resolve, reject) {
    if (num < 20) {
      resolve("The number is less than 20.");
    } else if (num > 20) {
      resolve("The number is greater than 20.");
    } else {
      reject("The number is equal to 20.");
    }
  });
}

// Usage
var input = prompt("Enter a number:");
var number = parseInt(input);
numTest(number)
  .then(function(result) {
    alert(result);
  })
  .catch(function(error) {
    alert(error);
  });

