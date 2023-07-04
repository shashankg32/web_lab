function leap_year()
{
const startYear = parseInt(prompt("Enter the starting year:")); 
const endYear = parseInt(prompt("Enter the ending year:")); 
let leapYears = ""; 

for (let year = startYear; year <= endYear; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
   
    if (leapYears !== "") {
      leapYears += ", "; 
    }
    leapYears += year;
  }
}
