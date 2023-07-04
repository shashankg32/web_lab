function email()
{
var text = prompt("Enter email id");
var mailformat = text.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
if(mailformat == 0 ) 
{alert("Valid email");}
else
{alert("invalid email");}
}
