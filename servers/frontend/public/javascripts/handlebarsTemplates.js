// Use the readAPI to fetch from db. This works in testing!

function mainListings(){
    let data = {
        first: {
            title: "Software engineer",
            workhours: "Full time - On-site",
            // Use 200 or so first characters from the long description and finish with '...'
            description: "Sample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSample textSD                                                                a     ",
            company: "ATALLAS CERAMICA",
            location: "Patras",
            postdate: "Posted at: 2 days ago"
        },
        second: {
            title: "Aids engineer",
            workhours: "Full time - On-site",
            description: "Sample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSample textSD                                                                a     ",
            company: "ATALLAS CERAMICA",
            location: "Patras",
            postdate: "Posted at: 2 days ago"
        },
        third: {
            title: "SuperAids engineer",
            workhours: "Full time - On-site",
            description: "Sample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSample textSD                                                                a     ",
            company: "ATALLAS CERAMICA",
            location: "Patras",
            postdate: "Posted at: 2 days ago"
        }
    };
    return data;
}

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
        }
    };
    return data;
}

exports.listings = mainListings();
exports.sponsors = mainSponsors();