// Fetch the logos from the net w/ their description?
function mainSponsors(){
    let data = {
        first: {
            src: "./images/1.gif",
            alt: "supreme description",
            top: true
        },
        second: {
            src: "./images/2.gif",
            alt: "supreme description",
        },
        third: {
            src: "./images/3.gif",
            alt: "supreme description",
        },
        fourth: {
            src: "./images/4.gif",
            alt: "supreme description",
        },
        fifth: {
            src: "./images/5.gif",
            alt: "supreme description",
        }
    };
    return data;
}

exports.sponsors = mainSponsors();