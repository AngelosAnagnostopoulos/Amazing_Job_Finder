
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
        postdaddy.style.display = "block";
        searchdaddy.style.display = "none";
        
        postBtn.className = "activetag";
        searchBtn.className = "inactivetag";

        postBtn.parentElement.className = "active";
        searchBtn.parentElement.className = "inactive";
    }
}

function displaySearch() {
    if (searchBtn.state == 0) {
        searchBtn.state = 1;
        postBtn.state = 0;
        
        postdaddy.style.display = "none";
        searchdaddy.style.display = "block";
        
        postBtn.className = "inactivetag";
        searchBtn.className = "activetag";

        postBtn.parentElement.className = "inactive";
        searchBtn.parentElement.className = "active";
    }
}
