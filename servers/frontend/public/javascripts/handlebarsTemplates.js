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
    }
    return data;
}

function searchListings(){
    let data = {
        1: {
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
        2: {
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
        3: {
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

        },
        4: {
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
        5: {
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

        },6: {
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
        7: {
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

        },8: {
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
        9: {
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

        },10: {
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
        11: {
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

        },12: {
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
        13: {
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

        },14: {
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
        15: {
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

        },
        16:{test:"test"},
        17:{test2:"test"},
        18:{test3:"test"},
        19:{test4:"test"},
        20:{test5:"test"},
        21:{test6:"test"},
        22:{test7:"test"},
        23:{test8:"test"},
        24:{test9:"test"},
        25:{test0:"test"},
        26:{test11:"test"},
        27:{test12:"test"},
        28:{test13:"test"},
        29:{test14:"test"},
        30:{test15:"test"},
        31:{test16:"test"},
        32:{test17:"test"},
        33:{test19:"test"},
        34:{test129:"test"},
        35:{test39:"test"},
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

exports.mainpagelistings = mainListings();
exports.listings = searchListings();
exports.sponsors = mainSponsors();