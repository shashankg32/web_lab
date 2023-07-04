function usn()
{ 
const usnn = prompt("Enter VTU USN");
var test = usnn.search(/^[1-4][a-z A-Z][a-z A-Z][0-9][0-9][A-Z a-z][A-Z a-z][0-9][0-9][0-9]$/);
var zerotest = usnn.search(/^[1-4][a-z A-Z][a-z A-Z][0-9][0-9][A-Z a-z][A-Z a-z][0][0][0]$/);
if(zerotest == 0)
{alert("invalid usn");}
else if(test == 0){alert("valid usn");}
else{alert("invalid usn");}
}
