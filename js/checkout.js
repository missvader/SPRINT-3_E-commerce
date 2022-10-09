//regEx
const regName = /^[A-Z]+$/i;
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regPhone= /^\+?(6\d{2}|7[1-9]\d{1})\d{6}$/;
const regPassword =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/
const regAddress = /^[a-zA-Z0-9\s,.'-]{3,}$/ ;

const formulario= document.getElementById("formulario");
	formulario.addEventListener("submit", (event) =>{
		event.preventDefault(validate);
	});
//Exercise 7
function validate(){
	let error = 0;
	//get the input fields
	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fLastN = document.getElementById("fLastN");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");
	
	//Validate name
	if(!regName.test(fName.value) || fName.value.length < 3){
		error++;
		fName.classList.remove("is-valid");
		fName.classList.add("is-invalid")
	}else{
		fName.classList.remove("is-invalid");
		fName.classList.add("is-valid");
	}
	//Validate lastName
	if(!regName.test(fLastN.value) || fLastN.value.length < 3){
		error++;
		fLastN.classList.remove("is-valid");
		fLastN.classList.add("is-invalid");
	}else{
		fLastN.classList.remove("is-invalid");
		fLastN.classList.add("is-valid");
	}
	//Validate email
	if(!regEmail.test(fEmail.value)){
		error++;
		fEmail.classList.remove("is-valid");
		fEmail.classList.add("is-invalid");
	}else{
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-valid");
	}
	//Validate address
	if(!regAddress.test(fAddress.value)){
		error++;
		fAddress.classList.remove("is-valid");
		fAddress.classList.add("is-invalid");
	}else{
		fAddress.classList.remove("is-invalid");
		fAddress.classList.add("is-valid");
	} 
	//Validate password
	if(!regPassword.test(fPassword.value)){
		error++;
		fPassword.classList.remove("is-valid");
		fPassword.classList.add("is-invalid");
	}else{
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
	}
	//Validate phone
	if(!regPhone.test(fPhone.value) ){
		error++;
		fPhone.classList.remove("is-valid");
		fPhone.classList.add("is-invalid");
	}else{
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
	}

	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}
}
