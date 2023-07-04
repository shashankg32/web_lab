function capitalizeFirstLetters() {

  const inputString = prompt("Enter a string:");
  

  const words = inputString.split(" ");
  

  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  

  const capitalizedString = capitalizedWords.join(" ");
  

  alert(capitalizedString);
}


