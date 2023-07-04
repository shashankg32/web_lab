function date()
{
const inputSentence = prompt("Enter a sentence with a date:");
const regex = /(0[1-9]|[1-2][0-9]|3[0-1])[\/\-](0[1-9]|1[0-2])[\/\-]([0-9][0-9][0-9][1-9])$/;
//const regexx = /(0[1-9]|[1-2][0-9]|3[0-1])[\/\-](0[1-9]|1[0-2])[\/\-]([0-9][0-9][0-9][0-9])$/;
const match = regex.exec(inputSentence);

if (match) {
alert(`Date found: ${match[0]}`);
} else {
alert("No valid date found in input sentence.");
}
}
