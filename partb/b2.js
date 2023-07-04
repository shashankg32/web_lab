function demonstrateSetVsArray() {
  let values = prompt("Enter comma-separated values:");
  let set = new Set(values.split(","));
  let array = values.split(",");
  alert(`Set: ${[...set]}\nArray: ${array}`);
  let searchValue = prompt("Enter value to search:");
  let setStart = performance.now();
  let setHasValue = set.has(searchValue);
  let setEnd = performance.now();
  let arrayStart = performance.now();
  let arrayHasValue = array.includes(searchValue);
  let arrayEnd = performance.now();
  alert(`Set has value "${searchValue}": ${setHasValue}. Search time: ${setEnd - setStart}ms.\nArray has value "${searchValue}": ${arrayHasValue}. Search time: ${arrayEnd - arrayStart}ms.`);
}
