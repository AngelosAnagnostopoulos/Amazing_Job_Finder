// Use the readAPI to fetch from db. This works in testing!

function mainListings(){
    let data = {
        first: {
            id: "1",
            title: "Technical lead cybersecurity engineer",
            hours: "Full time",
            company: "ATALLAS CERAMICA",
            location: "Athens",
            // Use 200 or so first characters from the long description and finish with '...'
            description: "Sample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSample textSD                                                                a     ",
            postdate: "Posted at: 3 days ago",
            
            onsite: "On site",
            bigdescription: "Supreme description here",
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
            bigdescription: "Sed ut quibusdam repellat nulla voluptatem consequatur. Ipsum facere nihil dolores eos placeat. Ut rerum perspiciatis aliquam voluptatem et nobis officia sit. Accusantium maxime explicabo enim neque qui sit. Eum ab et laborum deserunt maxime dolores unde. Similique quibusdam explicabo eligendi autem ipsa quia qui maxime. Est et libero eum architecto quis libero velit. Fugiat quibusdam tempora quia atque corrupti. Consequatur omnis odit quod ea animi consequatur quibusdam. Ea iste officia cupiditate perferendis asperiores commodi. Aut consequatur est laudantium. Sit magnam et perspiciatis ut. Recusandae libero consequuntur magnam. Corporis qui sunt minus a voluptas eum et. Repellat consequatur tempore nam ullam mollitia qui fuga. Et est optio est tenetur dolorem laudantium eligendi esse. Occaecati et aut excepturi sapiente.",
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
    let data = [
        {
            id: "1",
            title: "Technical lead cybersecurity engineer",
            hours: "Full time",
            company: "ATALLAS CERAMICA",
            location: "Athens",
            // Use 200 or so first characters from the long description and finish with '...'
            description: "Sample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSample textSD                                                                a     ",
            postdate: "Posted at: 4 days ago",
            
            onsite: "On site",
            bigdescription: "Supreme description for cybersec",
            category: "Cybersecurity engineer",
            salary: "6100-6300",

        },
        {
            id: "2",
            title: "Senior SysAdmin",
            hours: "Full time",
            company: "ATALLAS CERAMICA",
            location: "Trikala",
            description: "Sample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSample textSD                                                                a     ",
            postdate: "Posted at: 2 days ago",
            
            onsite: "On site",
            bigdescription: "Supreme description for systems administration",
            category: "Systems administrator",
            salary: "1100-1300",
            
        },
        {
            id: "3",
            title: "Junior software engineer",
            hours: "Part time",
            company: "ATALLAS CERAMICA",
            location: "Aigio",
            description: "Sample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSample textSD                                                                a     ",
            postdate: "Posted at: 10 days ago",
            
            onsite: "On site",
            bigdescription: "Sample text",
            category: "Software engineer",
            salary: "2100-3300",

        }
    ];
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