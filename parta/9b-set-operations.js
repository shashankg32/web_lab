function setProgram() 
{
let mySet = new Set();
let input = prompt("Enter values separated by commas:");
let values = input.split(",");
values.forEach(value => mySet.add(value.trim()));
let retrieve = prompt("Enter a value to retrieve from the set:");
let hasValue = mySet.has(retrieve);
let setValues = "";
for(let value of mySet) 
{
setValues += value + ", ";
}
setValues = setValues.slice(0, -2);
alert(`Set values: ${setValues}\nRetrieved value: ${retrieve} (${hasValue})`);
}
