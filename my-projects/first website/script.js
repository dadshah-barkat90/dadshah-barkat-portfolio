function order(){
 var user =   document.getElementById("user").value.trim();
 var phone =  document.getElementById("number").value.trim();
var text =  document.getElementById("area").value.trim();
var option =  document.getElementById("option").value.trim();

 var nameregexp = /^[a-zA-Z\s]{3,30}$/;
 var numberegexp = /^[0-9\d]{11}$/;

if(user === ""|| phone === "" || text === ""|| option === "")
{
alert("please fill out the feilds");
return false;
}
if(!nameregexp.test(user)){
alert("Invalid Name. Use 3-30 alphabetic characters only.");
return false;
}
if(!numberegexp.test(number)){
alert("Invalid Number. use 11 digits only.");
return false;
}
localStorage.setItem("username",user);
alert("Hello " + user + ", your message has been received. We’ll get back to you soon!");
return false;
}
