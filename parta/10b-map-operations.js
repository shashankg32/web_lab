function mapOperations()
{
const map = new Map();
const key1 = prompt("Enter key 1:");
const val1 = prompt("Enter value 1:");
map.set(key1, val1);
const key2 = prompt("Enter key 2:");
const val2 = prompt("Enter value 2:");
map.set(key2, val2);
const key = prompt("Enter key to retrieve value:");
const value = map.get(key);
alert(`Value for key ${key} is ${value}`);
let mapEntries = map.entries();
let currentEntry = mapEntries.next();
let output = "";
while (!currentEntry.done) {
output += `${currentEntry.value[0]}: ${currentEntry.value[1]}\n`;
currentEntry = mapEntries.next();
}
alert(output);
}
