/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append(["Andrea Mora"]);
 // var awesomeThoughts = "I am Andrea and I am AWESOME"
 // console.log(awesomeThoughts);

 // var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
 // console.log(funThoughts);
 // $("#main").append(funThoughts);
var bio = {
    "name" : "Andrea Mora",
    "role" : "Systems Engineer",
    "contact" : {
        "mobile" : "415-34034504", 
        "email" : "andrea.m.mora@gmail.com",
        "github" : "amoravil",
        "twitter" : "amoraviltw",
        "location" : "San Francisco"
    },
    "contactGeneric" : "01 Street, San Francisco, CA",
    "picURL" : "images/fry.jpg",
    "welcomeMsg" : "this is my resume! Welcome",
    "skills" :  [
        "programming", "project manager", "mom", "JS"]
};



var work = {};
work.employer = "Banco de la Republica";
work.title = "IT Architect";
work.dates = "2008-2015";
work.location = "Bogotá - Colombia";
work.description = "architects and designs information technology solutions and services for organizations. They posses a strong business and IT background to architect software, hardware, network or any IT solution that gives the best results to the business.";

var education = {};
education["name"] = "UIS";
education["degree"] = "Systems Engineer";
education["dates"] = "1995-2002";
education["location"] = "Bucaramanga - Colombia";

var formatContactGeneric = HTMLcontactGeneric.replace("%contact%", "Address");
console.log(formatContactGeneric);
var formatContactGeneric = formatContactGeneric.replace("%data%", bio.contactGeneric);
console.log(formatContactGeneric);

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contact.email));
$("#header").append(HTMLbioPic.replace("%data%", bio.picURL));
$("#header").append(formatContactGeneric);
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
$("#header").append(HTMLskills.replace("%data%", bio.skills.join(" - ")));

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkTitle.replace("%data%", work["title"]));

$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%", education.name));






// Examples ---- can be delete them without affect the webpage.

// var skills = ["programming", "teaching", "mom", "JS"];
// $("#main").append(skills);
// $("#main").append(skills[0]);

// skills.forEach(function(item, index, array) {
// 	console.log(item,index);
// });

// var sampleArray = [0,0,7];

// // var incrementLastArrayElement = function(_array) {
// //     var newArray = [];
// //     newArray = _array;
// //     newArray[2] = newArray[2]+1;
// //     return newArray;
// // };

// function incrementLastArrayElement(_array)  {
//     var newArray = [];
//     newArray = _array.slice(0);
//     var lastNumber = newArray.pop();
//     newArray.push(lastNumber + 1);
//     return newArray;
// }
// // Did your code work? The line below will tell you!
// console.log(incrementLastArrayElement(sampleArray));


// var name = "AlbERt EINstEiN";

// function nameChanger(oldName) {
//     var finalName = oldName;
//     // Your code goes here!

//     names = oldName.split(" ");
//     names[0] = names[0].slice(0,1).toUpperCase() 
//     			+ names[0].slice(1).toLowerCase();
//     names[1]= names[1].toUpperCase();
//     finalName = names.join(" ");

//     // Don't delete this line!
//     return finalName;
// };

// // Did your code work? The line below will tell you!
// console.log(nameChanger(name));






