//Init vals and listeners
const postBtn = document.getElementById("post-button");
const searchBtn = document.getElementById("search-button");

//Containers 
const searchdaddy = document.getElementById("searchjobs");
const postdaddy = document.getElementById("postjobs");

const searchJobsBtn = document.getElementById("submit");
const loginbox = document.getElementById('navloginbox');

searchBtn.state = 1;
searchBtn.daddy = searchdaddy;

postBtn.state = 0;
postBtn.daddy = postdaddy;

//Listeners
postBtn.addEventListener("click", displayPost);
searchBtn.addEventListener("click", displaySearch);
searchJobsBtn.addEventListener("click", displaySearchResults);

function displayPost() {
    if (postBtn.state == 0) {
        postBtn.state = 1;
        searchBtn.state = 0;

        setTimeout(function () {
            postdaddy.style.display = "block";
            searchdaddy.style.display = "none";
        }, 250)

        postBtn.className = "activetag";
        searchBtn.className = "inactivetag";

        postBtn.parentElement.className = "active";
        searchBtn.parentElement.className = "inactive";

        searchBtn.classList.add("inactivetagAnimation")
        searchBtn.parentElement.classList.add("inactiveAnimation")
        postBtn.classList.add("activetagAnimation")
        postBtn.parentElement.classList.add("activeAnimation")

    }
}

function displaySearch() {
    if (searchBtn.state == 0) {
        searchBtn.state = 1;
        postBtn.state = 0;

        setTimeout(function () {
            postdaddy.style.display = "none";
            searchdaddy.style.display = "block";
        }, 250)


        postBtn.className = "inactivetag";
        searchBtn.className = "activetag";

        postBtn.parentElement.className = "inactive";
        searchBtn.parentElement.className = "active";

        searchBtn.classList.add("activetagAnimation")
        searchBtn.parentElement.classList.add("activeAnimation")
        postBtn.classList.add("inactivetagAnimation")
        postBtn.parentElement.classList.add("inactiveAnimation")
    }
}

; (function () {
    var signupbox = document.getElementById('navsignupbox');
    function signuphoveredIn() {
        signupbox.classList.add("signuphoverin");
        signupbox.classList.remove("signuphoverout");
    };
    function signuphoveredOut() {
        signupbox.classList.add("signuphoverout");
        signupbox.classList.remove("signuphoverin");
    };

    signupbox.addEventListener('mouseover', signuphoveredIn);
    signupbox.addEventListener('mouseout', signuphoveredOut);

})();

; (function () {
    function loginhoveredIn() {
        loginbox.classList.add("loginhoverin");
        loginbox.classList.remove("loginhoverout");
    };
    function loginhoveredOut() {
        loginbox.classList.add("loginhoverout");
        loginbox.classList.remove("loginhoverin");
    };

    loginbox.addEventListener('mouseover', loginhoveredIn);
    loginbox.addEventListener('mouseout', loginhoveredOut);

})();


function displaySearchResults(e) {
    const mainInfo = document.getElementById("mainscreenInfo");
    const sponsors = document.getElementById("lemao");
    const filtersBtn = document.getElementById("filtersbutton");
    const firstListing = document.getElementsByClassName("listing");

    filtersBtn.classList.add("filtersFadein")
    filtersBtn.classList.remove("disabled")
    sponsors.style.display = "none";
    mainInfo.innerHTML = "Your search results";
    scrollToTarget(filtersBtn);
}


function scrollToTarget(element) {
    var offset = 50;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}
