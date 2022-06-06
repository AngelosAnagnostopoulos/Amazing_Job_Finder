const postBtn = document.getElementById("post-button");
const searchBtn = document.getElementById("search-button");

//Containers 
const searchdaddy = document.getElementById("searchjobs");
const postdaddy = document.getElementById("postjobs");

searchBtn.state = 1;
searchBtn.daddy = searchdaddy;

postBtn.state = 0;
postBtn.daddy = postdaddy;

postBtn.addEventListener("click", displayPost);
searchBtn.addEventListener("click", displaySearch);

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
    var loginbox = document.getElementById('navloginbox');
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