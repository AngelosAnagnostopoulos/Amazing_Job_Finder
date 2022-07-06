//Job listing modal functionality
//Carry over values from main page to popup and add a route
const postjobbutton = document.getElementById("postjob");
postjobbutton.addEventListener("click", setupPopup);

function setupPopup(e) {
    let postheader = {
        title: document.getElementById("postlisting"),
        category: document.getElementById("category"),
        onsite: document.getElementById("onsite"),
        hours: document.getElementById("hours"),
    };

    let postpopup = {
        title: document.getElementById("postlistingtitle"),
        longdescription: document.getElementById("longdescription"),
        category: document.getElementById("popupcategory"),
        onsite: document.getElementById("popuponsite"),
        hours: document.getElementById("popuptype"),
        location: document.getElementById("popuplocation"),
        salary: document.getElementById("popupsalary"),
    };

    postpopup.title.innerHTML = postheader.title.value;
    if (!postheader.title.value) {
        postpopup.title.innerHTML = "Listing title";
        //Or throw an error
    }
    postpopup.category.value = postheader.category.value;
    postpopup.onsite.value = postheader.onsite.value;
    postpopup.hours.value = postheader.hours.value;
}

function createListing(e) {

    const listingData = {
        title: document.getElementById("postlistingtitle").innerHTML,
        longdescription: document.getElementById("longdescription").value,
        category: document.getElementById("popupcategory").value,
        onsite: document.getElementById("popuponsite").value,
        hours: document.getElementById("popuptype").value,
        location: document.getElementById("popuplocation").value,
        salary: document.getElementById("popupsalary").value,
        email: document.getElementById("email").value,
        telephone: document.getElementById("telephone").value,
        website: document.getElementById("website").value,
        // companyname: User should be connected so just use their name
    }

    makePostRequest("/postpopup", listingData);
}

const listingsbox = document.getElementsByClassName("listing");
for (let index = 0; index < listingsbox.length; index++) {
    listingsbox[index].addEventListener("click", jobPopup);
}

var currentlistingId;

function jobPopup(e) {
    const listing = e.currentTarget;
    const button = listing.firstChild.nextElementSibling.lastChild.previousElementSibling;
    const id = button.id;
    button.click();

    currentlistingId = id;
    // Call the readAPI for the data

    let listingData = {
        title: document.getElementById("mainlistingtitle" + id),
        hours: document.getElementById("mainlistinghours" + id),
        companyname: document.getElementById("mainlistingcompname" + id),
        location: document.getElementById("mainlistinglocation" + id),
        smalldescription: document.getElementById("mainlistingdescription" + id),
        postdate: document.getElementById("mainlistingpostdate" + id),
        // Also retreive the image and swap with the modal (for now is a CSS blue circle)

        // This is extremelly stupid and should most likely change:
        bigdescription: document.getElementById("mainlistingbigdescription" + id),
        category: document.getElementById("mainlistingcategory" + id),
        onsite: document.getElementById("mainlistingonsite" + id),
        salary: document.getElementById("mainlistingsalary" + id),
    };

    let popupData = {
        title: document.getElementById("searchpopuplistingtitle"),
        hours: document.getElementById("searchpopuphours"),
        companyname: document.getElementById("searchpopupcompanyname"),
        location: document.getElementById("searchpopuplocation"),
        postdate: document.getElementById("searchpopuppostdate"),

        //Not in listingData (at least visible)
        bigdescription: document.getElementById("searchpopupdescription"),
        category: document.getElementById("searchpopupcategory"),
        onsite: document.getElementById("searchpopuponsite"),
        salary: document.getElementById("searchpopupsalary"),
        // +Company logo
    };

    popupData.title.innerHTML = listingData.title.innerHTML;
    popupData.hours.innerHTML = listingData.hours.innerHTML;
    popupData.companyname.innerHTML = listingData.companyname.innerHTML;
    popupData.location.innerHTML = listingData.location.innerHTML;
    popupData.postdate.innerHTML = listingData.postdate.innerHTML;

    // The idea is that this is already done through hbs for us while rendering the '/' route
    popupData.bigdescription.innerHTML = listingData.bigdescription.innerHTML;
    popupData.category.innerHTML = listingData.category.innerHTML;
    popupData.onsite.innerHTML = listingData.onsite.innerHTML;
    popupData.salary.innerHTML = listingData.salary.innerHTML;

    
}


const applicationBtn = document.getElementById("applicationButton");
const submitListingBtn = document.getElementById("listingButton");
const cvModalBtn = document.getElementById("applicationButtonhidden");
const cvSendApplyBtn = document.getElementById("cvapplyButton");

applicationBtn.addEventListener("click", showCVmodal);
submitListingBtn.addEventListener("click", submitJobListing);
cvSendApplyBtn.addEventListener("click", applyToJob);

function showCVmodal(e) {
    if (promptLoginSearcher()) {
        cvModalBtn.click();
    } else {
        searcherError();
    }
}

function applyToJob() {
    let file = document.getElementById("myFile");
    let url = "/apply";
    makePostRequest(url, {job_listing_id: currentlistingId, application_text: file.filename || "test application"}, console.log);
}

function submitJobListing(e) {
    if (promptLoginPoster()) {
        createListing();
        listingSubmitSuccess();
    } else {
        posterError();
    }
}

function listingSubmitSuccess() {
    console.log("Listing submit successfull!");
}

function searcherError() {
    console.log("Searcher error!");
}

function posterError() {
    console.log("Poster error!");
}

function makePostRequest(url, data) {

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => console.log(xhr.responseText);

    xhr.send(data);
}

function promptLoginSearcher() {
    if (isConnected && isSearcher) {
        console.log("Searcher user already logged in!");
        return true;
    } else {
        loginbox.click();
    }
    return false;
}

function promptLoginPoster() {
    if (isConnected && isPoster) {
        console.log("Poster user already logged in!");
        return true;
    } else {
        loginbox.click();
    }
    return false;
}

const loginbox = document.getElementById('navloginbox');
const logoutbox = document.getElementById('navlogoutbox');
const signupbox = document.getElementById('navsignupbox');

; (function () {
    if (isConnected) {
        signupbox.style.display = "none";
        loginbox.style.display = "none";
        logoutbox.style.display = "block"
    } else {
        loginbox.style.display = "block";
        signupbox.style.display = "block";
        logoutbox.style.display = "none"
    }
})();
