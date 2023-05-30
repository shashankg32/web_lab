//Write a JavaScript code to handle multiple call back functions using JavaScript promises (use promiseobject.then(onfulfilled,onrejected)).


//start

function performTask() {
  return new Promise(function(resolve, reject) {
    let input = prompt("Enter a value:");
    let number = parseInt(input);

    if (isNaN(number)) {
      reject("Invalid input. Please enter a number.");
    } else {
      resolve(number);
    }
  });
}

performTask()
  .then(function(result) {
    alert("The number is: " + result);
    return result * 2;
  })
  .then(function(result) {
    alert("The double of the number is: " + result);
    return result + 10;
  })
  .then(function(result) {
    alert("The number plus 10 is: " + result);
  })
  .catch(function(error) {
    alert(error);
  });

