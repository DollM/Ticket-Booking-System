function resetpdd()
{
var mypdd = document.getElementById("pdd");
var mycpdd = document.getElementById("cpdd");
if(mypdd.value!=mycpdd.value)
{
alert("The passwords does not match");
return false;
}
else
return true;
}