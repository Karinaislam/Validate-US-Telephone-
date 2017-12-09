



function validatePhoneNumber(){
	var Input = document.getElementById('inputPhone').value;

    var phoneNumber=  /^1? ?(\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d{4}$/;
   
   console.log(Input)
if (phoneNumber.test(Input) === true){
	

	document.getElementById('result').innerHTML="The Phone Number is valid";

	console.log ("ok");

}

else{
	document.getElementById('result').innerHTML="Not a Valid Phone Number";

	console.log ("not ok");
}

}
