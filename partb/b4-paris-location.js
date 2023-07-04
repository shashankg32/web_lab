function checkLocation() {
  const location = prompt("Enter a location:");
  
  return new Promise((resolve, reject) => {
    if (location.toLowerCase() === "paris") {
      resolve("Let's take a trip to Paris");
    } else {
      reject("Invalid Location");
    }
  });
}

checkLocation()
  .then(message => {
    alert(message);
  })
  .catch(error => {
    alert(error);
  });
