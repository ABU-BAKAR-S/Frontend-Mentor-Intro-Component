let fname = document.querySelector("input[name=fname]");
let fnameError = document.querySelector("#fnameError");
let fErrorIcon = document.querySelector("#fnameErrorIcon");
let lname = document.querySelector("input[name=lname]");
let lnameError = document.querySelector("#lnameError");
let lErrorIcon = document.querySelector("#lnameErrorIcon");
let email = document.querySelector("input[name=email]");
let emailError = document.querySelector("#emailError");
let emailErrorIcon = document.querySelector("#emailErrorIcon");
let password = document.querySelector("input[name=password]");
let passwordError = document.querySelector("#passwordError");
let passwordErrorIcon = document.querySelector("#passwordErrorIcon");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
})

function validFirstName() {

    if (fname.value.length == 0 || fname.value.trim() === '') {
        fnameError.style.display = "block";
        fErrorIcon.style.display = "block";
        fname.style.borderColor = "hsl(0, 100%, 74%)";

        return false;
    }
    else {
        fnameError.style.display = "none";
        fErrorIcon.style.display = "none";
        fname.style.borderColor = "rgb(209 213 219) ";

        return true;
    }

}

function validLastName() {



    if (lname.value.length == 0 || lname.value.trim() === '') {
        lnameError.style.display = "block";
        lErrorIcon.style.display = "block";
        lname.style.borderColor = "hsl(0, 100%, 74%)";

        return false;
    }
    else {
        lnameError.style.display = "none";
        lErrorIcon.style.display = "none";
        lname.style.borderColor = "rgb(209 213 219) ";

        return true;
    }
}

function validEmail() {



    if (email.value.length == 0 || email.value.trim() === '') {
        emailError.style.display = "block";
        emailErrorIcon.style.display = "block";
        email.style.borderColor = "hsl(0, 100%, 74%)";

        return false;
    }
    if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.style.display = "block";
        emailErrorIcon.style.display = "block";
        email.style.borderColor = "hsl(0, 100%, 74%)";

        return false;
    }
    else {
        emailError.style.display = "none";
        emailErrorIcon.style.display = "none";
        email.style.borderColor = "rgb(209 213 219) ";

        return true;
    }

}

function validPassword() {



    if (password.value.length == 0 || password.value.trim() === '') {
        passwordError.style.display = "block";
        passwordErrorIcon.style.display = "block";
        password.style.borderColor = "hsl(0, 100%, 74%)";

        return false;
    }
    else {
        passwordError.style.display = "none";
        passwordErrorIcon.style.display = "none";
        password.style.borderColor = "rgb(209 213 219) ";

        return true;
    }

}

function submitForm(e) {

    if (!validFirstName() || !validLastName() || !validEmail() || !validPassword()) {
        fnameError.style.display = "block";
        fErrorIcon.style.display = "block";
        fname.style.borderColor = "hsl(0, 100%, 74%)";

        lnameError.style.display = "block";
        lErrorIcon.style.display = "block";
        lname.style.borderColor = "hsl(0, 100%, 74%)";

        emailError.style.display = "block";
        emailErrorIcon.style.display = "block";
        email.style.borderColor = "hsl(0, 100%, 74%)";

        passwordError.style.display = "block";
        passwordErrorIcon.style.display = "block";
        password.style.borderColor = "hsl(0, 100%, 74%)";

        return false;
    }

    fnameError.style.display = "none";
    fErrorIcon.style.display = "none";
    fname.style.borderColor = "rgb(209 213 219)";

    lnameError.style.display = "none";
    lErrorIcon.style.display = "none";
    lname.style.borderColor = "rgb(209 213 219)";

    emailError.style.display = "none";
    emailErrorIcon.style.display = "none";
    email.style.borderColor = "rgb(209 213 219)";

    passwordError.style.display = "none";
    passwordErrorIcon.style.display = "none";
    password.style.borderColor = "rgb(209 213 219)";

    alert("Trail Claimed Successfully!");

    fname.value = '';
    lname.value = '';
    email.value = '';
    password.value = '';

    return true;




}