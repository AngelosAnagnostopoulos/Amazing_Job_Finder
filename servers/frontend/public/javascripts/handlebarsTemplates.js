// Use the readAPI to fetch from db. This works in testing!

function mainListings(){
    let data = {
        first: {
            id: "1",
            title: "Technical lead cybersecurity engineer",
            hours: "Full time",
            company: "ATALLAS CERAMICA",
            location: "Patras",
            // Use 200 or so first characters from the long description and finish with '...'
            description: "Sample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSample textSD                                                                a     ",
            postdate: "Posted at: 3 days ago",
            
            onsite: "On site",
            bigdescription: "Big big things here",
            category: "Cybersecurity engineer",
            salary: "6100-6300",

        },
        second: {
            id: "2",
            title: "Senior SysAdmin",
            hours: "Full time",
            company: "ATALLAS CERAMICA",
            location: "Trikala",
            description: "Sample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSample textSD                                                                a     ",
            postdate: "Posted at: 2 days ago",
            
            onsite: "On site",
            bigdescription: "Big big things here",
            category: "Systems administrator",
            salary: "1100-1300",
            
        },
        third: {
            id: "3",
            title: "Junior software engineer",
            hours: "Part time",
            company: "ATALLAS CERAMICA",
            location: "Aigio",
            description: "Sample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSample textSD                                                                a     ",
            postdate: "Posted at: 10 days ago",
            
            onsite: "On site",
            bigdescription: "Big big things here",
            category: "Software engineer",
            salary: "2100-3300",

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

exports.listings = mainListings();
exports.sponsors = mainSponsors();