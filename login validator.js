function loginval()
{
var id = "mou123";
var pd = '1234567';
var idd= document.getElementById("checkid");
var pdd= document.getElementById("checkpd");
if(idd.value!=id||pdd.value!=pd)
{
alert("The Id /Password does not match");
return false;
}
else
	return true;
}