// Submit a post request w/ json "Login" data
const button = document.getElementById("loginButton")
button.addEventListener("click", sendLoginInfo)

function sendLoginInfo(e) {
    const username = document.getElementById("loginusername")
    const password = document.getElementById("loginpassword")

    let userData = {
        "username": username.value,
        "password": password.value
    }
    let url = "/login/user/json"

    makePostRequest(url, userData)
}


// Check if passwords match while user is making an account
const signupUsername = document.getElementById("signupusername")
const signupEmail = document.getElementById("signupemail")
const signupPassword = document.getElementById("signupPassword")
const signupPasswordConfirm = document.getElementById("signupPasswordConfirm")

const passwordButton = document.getElementById("signupButton2") 

signupPasswordConfirm.addEventListener("keyup", checkPasswordsClient)

if (signupPassword.value == "") {
    passwordButton.classList.add("disabled")
}

function checkPasswordsClient(e) {

    if (signupPassword.value != signupPasswordConfirm.value) {
        passwordButton.classList.add("disabled")
        signupPassword.classList.add("warning")
        signupPasswordConfirm.classList.add("warning")
    } else if (signupPassword.value == signupPasswordConfirm.value) {
        passwordButton.classList.remove("disabled")
        signupPassword.classList.remove("warning")
        signupPasswordConfirm.classList.remove("warning")
        signupPassword.classList.add("success")
        signupPasswordConfirm.classList.add("success")
    } 

}


// Create signup post request with info from modals
const signupSearcherButton = document.getElementById("signupButton4")
const signupPosterButton = document.getElementById("signupButton5")

signupSearcherButton.addEventListener("click", sendSignupSearcher)
signupPosterButton.addEventListener("click", sendSignupPoster)

const sUsername = signupUsername.value
const sEmail = signupEmail.value
const sPassword = signupPassword.value


function sendSignupSearcher() {
    // console.log("Hello from searcher")
    let checkboxes = [
        document.getElementById("techboxsearcher"),
        document.getElementById("securityboxsearcher"),
        document.getElementById("systemsboxsearcher"),
        document.getElementById("webdevboxsearcher"),
        document.getElementById("databoxsearcher"),
        document.getElementById("qualityboxsearcher"),
        document.getElementById("managementboxsearcher"),
        document.getElementById("financesboxsearcher")
    ]

    let data = []
    let url = "/signup/searcher"
    
    data.push(sUsername,sPassword,sEmail)
    for (let index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            data.push(checkboxes[index])
        }
    }

    makePostRequest(url, data)
    clearArray(data)
}

// Submit interests from checkboxes to user profile 
// and filter searches based on them
function sendSignupPoster() {
    // console.log("Hello from poster")
    let checkboxes = [
        document.getElementById("techboxposter"),
        document.getElementById("securityboxposter"),
        document.getElementById("systemsboxposter"),
        document.getElementById("webdevboxposter"),
        document.getElementById("databoxposter"),
        document.getElementById("qualityboxposter"),
        document.getElementById("managementboxposter"),
        document.getElementById("financesboxposter")
    ]

    let data = []
    let url = "/signup/poster"

    data.push(sUsername,sPassword,sEmail)
    for (let index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            data.push(checkboxes[index])
        }
    }

    makePostRequest(url, data)
    clearArray(data)
}

function makePostRequest(url, data){

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => console.log(xhr.responseText);

    xhr.send(data);
}


function clearArray(array) {
    array.length = 0;
}

//Make sure user submits username and email

const nameMailButton = document.getElementById("signupButton1")

const nameInputSignup = document.getElementById("signupusername")
const emailInputSignup = document.getElementById("signupemail")
nameMailButton.classList.add("disabled")

nameInputSignup.addEventListener("keyup", checkUsernameEmailClient)
emailInputSignup.addEventListener("keyup", checkUsernameEmailClient)

//Should probably add functionality for proper names emails and passwords but who cares
function checkUsernameEmailClient(e){
    if (nameInputSignup.value == "" || emailInputSignup == ""){
        nameMailButton.classList.add("disabled")
    }else if (nameInputSignup.value !== ""){
        if(emailInputSignup !== ""){
            nameMailButton.classList.remove("disabled")
        }
    }
}
