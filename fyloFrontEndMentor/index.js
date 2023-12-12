var inputEmail = document.querySelector(".input-email");
var form = document.querySelector('form');
var messageError = document.querySelector(".error");
function handleSubmit(e) {
    e.preventDefault();
    if (inputEmail.value.length === 0) {
        messageError.style.display = "block";
    }
    else {
        messageError.style.display = "none";
        inputEmail.value = "";
    }
}
form.addEventListener('submit', handleSubmit);
