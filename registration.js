var loginBtn = document.querySelector(".container2-btnlogin")
var usernameInput = document.getElementById("inp1-1")
var usernameHint = document.getElementById("username-hint")
var emailInput = document.getElementById("inp2-2")
var emailHint = document.getElementById("email-hint")
var passwordInput = document.getElementById("inp3-3")
var passwordHint = document.getElementById("password-hint")

loginBtn.addEventListener('click', function() {
    var isFormValid = true;
    if (usernameInput.value.length < 6) {
        usernameHint.style.display = 'block';
        usernameInput.style.border = "1px solid red";
        isFormValid = false; 
    } else {
        usernameHint.style.display = 'none';
    }
    var emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(emailInput.value)) {
        emailHint.style.display = "block";
        emailInput.style.border = "1px solid red";
        isFormValid = false;
    }
     else {
        emailHint.style.display = 'none';
    }
    if (passwordInput.value.length < 8) {
        passwordHint.style.display = 'block';
        passwordInput.style.border = "1px solid red";
        isFormValid = false;
    } 
    else {
        passwordHint.style.display = 'none';
    }
    if (isFormValid) {
        alert("Success! You have registered.")
        usernameInput.value = ""
        emailInput.value = ""
        passwordInput.value = ""
    }
});