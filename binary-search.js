function binarySearch(array, element) {
  let low = 0;
  let high = array.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (array[mid] === element) {
      return mid;
    } else if (array[mid] < element) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

function main() {
  let array = [];
  let element;

  for (let i = 0; i < 10; i++) {
    element = prompt("Enter an element: ");
    array.push(element);
  }

  element = prompt("Enter an element to search for: ");
  let index = binarySearch(array, element);

  if (index === -1) {
    alert("Element not found.");
  } else {
    alert("Element found at index: " + index);
  }
}

main();

