function validate(){
	let flag = true;
	const errorMessage = document.getElementsByClassName('error-message');

	const firstName = document.getElementById('first').value;
	if(firstName.length < 2){
		errorMessage[0].textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
		errorMessage[0].style.display = 'block';
		flag = false;
	}else{
		errorMessage[0].style.display = 'none';
	}

	const lastName = document.getElementById('last').value;
	if(lastName.length < 2){
		errorMessage[1].textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
		errorMessage[1].style.display = 'block';
		flag = false;
	}else{
		errorMessage[1].style.display = 'none';
	}

	const email = document.getElementById('email').value;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(email.length === 0 || !emailRegex.test(email)){
		errorMessage[2].textContent = "Vous devez entrer une adresse email valide.";
		errorMessage[2].style.display = "block";
		flag = false;
	}else{
		errorMessage[2].style.display = "none";
	}

	const birthdate = document.getElementById('birthdate').value;
	if(birthdate.length === 0){
		errorMessage[3].textContent = "Vous devez entrer votre date de naissance.";
		errorMessage[3].style.display = "block";
		flag = false;
	}else{
		errorMessage[3].style.display = "none";
	}

	const quantity = document.getElementById('quantity').value;
	if(isNaN(quantity)){
		errorMessage[4].textContent = "Vous devez entrer une valeur numérique.";
		errorMessage[4].style.display = "block";
		flag = false;
	}else{
		errorMessage[4].style.display = "none";
	}

	const location = document.getElementsByName('location');
	let locationChecked = false;
	for(let i = 0; i < location.length; i++){
		if(location[i].checked){
			locationChecked = true;
			break;
		}
	}
	if(!locationChecked){
		errorMessage[5].textContent = "Vous devez choisir une option.";
		errorMessage[5].style.display = "block";
		flag = false;
	}else{
		errorMessage[5].style.display = "none";
	}

	const terms = document.getElementById("checkbox1");
	if(!terms.checked){
		errorMessage[6].textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
		errorMessage[6].style.display = "block";
		flag = false;
	}else{
		errorMessage[6].style.display = "none";
	}

	if(flag){
		msgValidate();
		return false;
	}else{
		return false;
	}
}

function msgValidate(){
	console.log("msgValidate");
	const formData = document.getElementsByName("reserve")[0];
	const btnClose = document.getElementById("closeForm");
	const message = document.getElementById("validate-message")
	const modalBody = document.querySelector(".modal-body");
	
	const width = window.innerWidth;

	formData.style.display = "none";
	btnClose.classList.remove("btn-hide");
	btnClose.classList.add("btn-show");
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
		closeModal();
	})
}