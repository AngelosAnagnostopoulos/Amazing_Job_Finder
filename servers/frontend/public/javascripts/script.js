const postBtn = document.getElementById("post-button");
const searchBtn = document.getElementById("search-button");
const a = document.getElementsByClassName("headerwrapper");

postBtn.addEventListener("click", displayme);
searchBtn.addEventListener("click", displayme);


var p = document.createElement('p');
p.innerHTML = 'some text here';
function displayme() {
    a.style.display = 'none';
    document.getElementById('headerwrapper').appendChild(p);
}

// searchBtn.state = 1;
// postBtn.state = 0;
// clickedBtn = searchBtn;
// unclickedBtn = postBtn;

// function display(clickedBtn) {
//     if (clickedBtn.state = 1) {
//         return
//     }else {
//         clickedBtn.state = 1;
//         unclickedBtn.state = 0;
//         clickedBtn.parentNode.style.display = "visible";
//         unclickedBtn.parentNode.style.display = "disabled";
//         swap(clickedBtn,unclickedBtn);
//     }
// }

// function swap(a,b) {
//     var temp;
//     temp = a;
//     a = b;
//     b = temp;
// }
