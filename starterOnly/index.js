let input = {
	firstName: false,
	lastName: false,
	email: false,
	birthdate: false,
	quantity: false,
	location: false,
	terms: false
}

function validateInput(){
	const btnSubmit = document.querySelector(".btn-submit");
	const inputValid = Object.values(input).every((value) => value === true);

	if(inputValid){
		btnSubmit.classList.remove("btn-disabled");
		btnSubmit.removeAttribute("disabled");
	}else{
		btnSubmit.classList.add("btn-disabled");
		btnSubmit.setAttribute("disabled", true);
	}
}

function validateFirstName() {
	const firstName = document.getElementById("first").value;
	const errorMessage = document.getElementsByClassName("error-message")[0];
	
	if(firstName.length < 2) {
	  errorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
	  errorMessage.style.display = "block";
	  input.firstName = false;
	} else {
	  errorMessage.style.display = "none";
	  input.firstName = true;
	}
	validateInput();
}

function validateLastName() {
	const lastName = document.getElementById("last").value;
	const errorMessage = document.getElementsByClassName("error-message")[1];

	if(lastName.length < 2) {
		errorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
		errorMessage.style.display = "block";
		input.lastName = false;
	}
	else {
		errorMessage.style.display = "none";
		input.lastName = true;
	}
	validateInput();
}

function validateEmail() {
	const email = document.getElementById("email").value;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const errorMessage = document.getElementsByClassName("error-message")[2];

	if(email.length === 0 || !emailRegex.test(email)) {
		errorMessage.textContent = "Vous devez entrer une adresse email valide.";
		errorMessage.style.display = "block";
		input.email = false;
	}
	else {
		errorMessage.style.display = "none";
		input.email = true;
	}
	validateInput();
}

function validateBirthdate() {
	const birthdate = document.getElementById("birthdate").value;
	const errorMessage = document.getElementsByClassName("error-message")[3];

	if(birthdate.length === 0) {
		errorMessage.textContent = "Vous devez entrer votre date de naissance.";
		errorMessage.style.display = "block";
		input.birthdate = false;
	}
	else {
		errorMessage.style.display = "none";
		input.birthdate = true;
	}
	validateInput();
}

function validateQuantity() {
	const quantity = document.getElementById("quantity").value;
	const errorMessage = document.getElementsByClassName("error-message")[4];

	if(isNaN(quantity) || quantity.length === 0) {
		errorMessage.textContent = "Vous devez entrer une valeur numérique.";
		errorMessage.style.display = "block";
		input.quantity = false;
	}
	else {
		errorMessage.style.display = "none";
		input.quantity = true;
	}
	validateInput();
}

function validateLocation() {
	const location = document.getElementsByName("location");
	const errorMessage = document.getElementsByClassName("error-message")[5];
	let locationChecked = false;

	for(let i = 0; i < location.length; i++) {
		if(location[i].checked) {
			locationChecked = true;
			break;
		}
	}

	if(!locationChecked) {
		errorMessage.textContent = "Vous devez choisir une option.";
		errorMessage.style.display = "block";
		input.location = false;
	}
	else {
		errorMessage.style.display = "none";
		input.location = true;
	}
	validateInput();
}

function validateTerms() {
	const terms = document.getElementById("checkbox1");
	const errorMessage = document.getElementsByClassName("error-message")[6];

	if(!terms.checked) {
		errorMessage.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
		errorMessage.style.display = "block";
		input.terms = false;
	}
	else {
		errorMessage.style.display = "none";
		input.terms = true;
	}
	validateInput();
}

document.getElementById("first").addEventListener("input", validateFirstName);
document.getElementById("last").addEventListener("input", validateLastName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("birthdate").addEventListener("input", validateBirthdate);
document.getElementById("quantity").addEventListener("input", validateQuantity);
document.getElementById("checkbox1").addEventListener("input", validateTerms);
const locations = document.getElementsByName("location");
for(let i = 0; i < locations.length; i++) {
	locations[i].addEventListener("input", validateLocation);
}

function msgValidate(){
	const form = document.getElementById("form");
	const formData = document.getElementsByName("reserve")[0];
	const btnClose = document.getElementById("closeForm");
	const message = document.getElementById("validate-message");
	const modalBody = document.querySelector(".modal-body");
	const width = window.innerWidth;
	const closeMdl = document.getElementById("closeModal");
	const closeMsg = document.querySelector(".close-message");

	formData.style.display = "none";
	btnClose.classList.remove("btn-hide");
	btnClose.classList.add("btn-show");
	closeMdl.style.display = "none";
	closeMsg.style.display = "block";
	message.style.display = "block";
	message.style.textAlign = "center";
	message.style.fontSize = "36px";

	if(width < 540){
		modalBody.style.height = "580px";
	}else{
		modalBody.style.height = "700px";
	}

	modalBody.style.display = "flex";
	modalBody.style.justifyContent = "center";
	modalBody.style.alignItems = "center";
	btnClose.addEventListener("click", () => {
		input = {
			firstName: false,
			lastName: false,
			email: false,
			birthdate: false,
			quantity: false,
			location: false,
			terms: false
		}
		form.reset();
		formData.style.display = "block";
		btnClose.classList.remove("btn-show");
		btnClose.classList.add("btn-hide");
		message.style.display = "none";
		closeModal();
	})

	closeMsg.addEventListener("click", () => {
		input = {
			firstName: false,
			lastName: false,
			email: false,
			birthdate: false,
			quantity: false,
			location: false,
			terms: false
		}
		form.reset();
		formData.style.display = "block";
		btnClose.classList.remove("btn-show");
		btnClose.classList.add("btn-hide");
		message.style.display = "none";
		closeModal();
	})
	return false;
}