// Submit a post request w/ json "Login" data
const button = document.getElementById("loginButton");
button.addEventListener("click", sendLoginInfo);

function sendLoginInfo(e) {
    const username = document.getElementById("loginusername");
    const password = document.getElementById("loginpassword");

    let userData = {
        "username": username.value,
        "password": password.value
    };
    let url = "/login";

    makePostRequest(url, userData);
}

// Create signup pos t request with info from modals
const signupUsername = document.getElementById("signupusername");
const signupEmail = document.getElementById("signupemail");
const signupPassword = document.getElementById("signupPassword");
const signupPasswordConfirm = document.getElementById("signupPasswordConfirm");
const passwordButton = document.getElementById("signupButton2");

signupPasswordConfirm.addEventListener("keyup", checkPasswordsClient);
signupPassword.addEventListener("keyup", checkPasswordsClient);

const signupSearcherButton = document.getElementById("signupButton4");
const signupPosterButton = document.getElementById("signupButton5");

signupSearcherButton.addEventListener("click", sendSignupSearcher);
signupPosterButton.addEventListener("click", sendSignupPoster);

const sUsername = signupUsername.value;
const sEmail = signupEmail.value;
const sPassword = signupPassword.value;


function sendSignupSearcher() {

    let data = {
        "username": sUsername,
        "password": sPassword,
        "email": sEmail,
        "interests": [],
        "isSearcher": true,
        "isPoster": false,
    };

    let url = "/signup";

    for (let index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            data.interests.push(checkboxes[index]);
        }
    }

    makePostRequest(url, data);
}

// Submit interests from checkboxes to user profile 
// and filter searches based on them
function sendSignupPoster() {
    let checkboxes = [
        document.getElementById("techboxsearcher").nextElementSibling.innerHTML,
        document.getElementById("securityboxsearcher").nextElementSibling.innerHTML,
        document.getElementById("systemsboxsearcher").nextElementSibling.innerHTML,
        document.getElementById("webdevboxsearcher").nextElementSibling.innerHTML,
        document.getElementById("databoxsearcher").nextElementSibling.innerHTML,
        document.getElementById("qualityboxsearcher").nextElementSibling.innerHTML,
        document.getElementById("managementboxsearcher").nextElementSibling.innerHTML,
        document.getElementById("financesboxsearcher").nextElementSibling.innerHTML
    ];

    let data = {
        "username": sUsername,
        "password": sPassword,
        "email": sEmail,
        "interests": [],
        "isSearcher": false,
        "isPoster": true,
    };

    let url = "/signup";

    for (let index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            data.interests.push(checkboxes[index]);
        }
    }

    makePostRequest(url, data);
}

function makePostRequest(url, data) {

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => console.log(xhr.responseText);

    xhr.send(data);
}

// Check if passwords match while user is making an account
function checkPasswordsClient(e) {

    let strength = checkPasswordStrength(signupPassword.value);
    console.log(strength);
    if (signupPassword.value != signupPasswordConfirm.value || strength == "Weak" || strength == "Very Weak") {
        passwordButton.classList.add("disabled");
        signupPassword.classList.add("warning");
        signupPasswordConfirm.classList.add("warning");
        signupPassword.classList.remove("success");
        signupPasswordConfirm.classList.remove("success");
        let mismatch = document.createElement("p");
    } else if (signupPassword.value == signupPasswordConfirm.value) {
        passwordButton.classList.remove("disabled");
        signupPassword.classList.remove("warning");
        signupPasswordConfirm.classList.remove("warning");
        signupPassword.classList.add("success");
        signupPasswordConfirm.classList.add("success");
    }

}

function checkPasswordStrength(password) {
    const strengthText = document.getElementById("passwordStrength");

    let strength = {
        1: 'Very Weak',
        2: 'Weak',
        3: 'Medium',
        4: 'Strong',
        5: 'Very Strong'
    };

    let styleClasses = {
        'Weak': "weakpass",
        'Medium': "mediumpass",
        'Strong': "strongpass",
        'Very Strong': "verystrongpass"
    };

    let strengthValue = {
        'caps': false,
        'length': false,
        'special': false,
        'numbers': false,
        'small': false
    };

    if (password.length < 4) {
        strengthText.innerText = "Very Weak";
        strengthText.classList.add("weakpass");
    } else {

        if (password.length >= 8) {
            strengthValue.length = true;
        }

        for (let index = 0; index < password.length; index++) {
            let char = password.charCodeAt(index);
            if (!strengthValue.caps && char >= 65 && char <= 90) {
                strengthValue.caps = true;
            } else if (!strengthValue.numbers && char >= 48 && char <= 57) {
                strengthValue.numbers = true;
            } else if (!strengthValue.small && char >= 97 && char <= 122) {
                strengthValue.small = true;
            } else if (!strengthValue.numbers && char >= 48 && char <= 57) {
                strengthValue.numbers = true;
            } else if (!strengthValue.special && (char >= 33 && char <= 47) || (char >= 58 && char <= 64)) {
                strengthValue.special = true;
            }
        }

        let strengthIndicator = 0;
        for (let metric in strengthValue) {
            if (strengthValue[metric] === true) {
                strengthIndicator++;
            }
        }

        if (password.length > 12) {
            strengthIndicator++;
        }

        strengthText.innerText = strength[strengthIndicator]
        let styleclass = styleClasses[strength[strengthIndicator]]
        strengthText.classList.add(styleclass)

    }
    return strengthText.innerText;
}


//Make sure user submits username and email
const nameMailButton = document.getElementById("signupButton1");

const nameInputSignup = document.getElementById("signupusername");
const emailInputSignup = document.getElementById("signupemail");
nameMailButton.classList.add("disabled");

nameInputSignup.addEventListener("keyup", checkUsernameEmailClient);
emailInputSignup.addEventListener("keyup", checkUsernameEmailClient);

function checkUsernameEmailClient(e) {
    if (!checkEmailClient(emailInputSignup.value) || !checkUsernameClient(nameInputSignup.value)) {
        nameMailButton.classList.add("disabled");
    } else if (nameInputSignup.value != "" && emailInputSignup.value != "") {
        nameMailButton.classList.remove("disabled");
    }
}

// Check username and email requirements
function checkEmailClient(email) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
        return true;
    } else {
        return false;
    }
}

function checkUsernameClient(username) {
    let regexName = /^[a-zA-Z0-9_]+$/;
    if (username.match(regexName)) {
        return true;
    } else {
        return false;
    }
}