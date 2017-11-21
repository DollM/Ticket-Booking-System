//validator.js
function checknm()
{
	var myname = document.getElementById('fst').value;
	//alert(myname);
	var pos = myname.search(/^[a-z]+$/);
	//alert(pos);
	if(pos!=0)
	{
		document.getElementById('fst').value = " ";
		alert("The name you entered is not in correct form");
		
		return false;
	}
	else 
		return true;
}
function checknm2()
{
var mynamee = document.getElementById("sec");
var pos=mynamee.value.search(/^[A-Z] [a-z]+, ?[A-Z] [a-z]+, ?[A-Z]\.?$/);
if(pos!=0)
{
	document.getElementById('fst').value = " ";
alert("The name you entered is not in correct form");
return false;
}
else 
return true;
}
function checkph()
{
var mynum = document.getElementById("num");
var pos=mynum.value.search(/^\d{3}\d{3}\d{4}$/);
if(pos!=0)
{
	document.getElementById('fst').value = " ";
alert("The phone number you entered is not in correct form");
return false;
}
else 
return true;
}
function checkpd()
{
var mypd = document.getElementById("pd");
var mycpd = document.getElementById("cpd");
if(mypd.value!=mycpd.value)
{
	document.getElementById('fst').value = " ";
alert("The passwords does not match");
return false;
}
else
return true;
}
function info()
{
	alert("The password must contain an uppercase letter, a lowercase letter, a special character, a number");
}





