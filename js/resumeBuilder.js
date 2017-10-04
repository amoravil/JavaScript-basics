/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name" : "Andrea Mora",
    "role" : "Systems Engineer",
    "contacts" : {
        "mobile" : "415-34034504", 
        "email" : "andrea.m.mora@gmail.com",
        "github" : "amoravil",
        "twitter" : "amoraviltw",
        "location" : "San Francisco"
    },
    "contactGeneric" : "01 Street, San Francisco, CA",
    "picURL" : "images/fry.jpg",
    "welcomeMsg" : "this is my resume! Welcome",
    // "skills" :  []
    "skills" :  [
        "programming", "project manager", "mom", "JS"]
};

var work = {
    "jobs": [
        {
            "employer": "Banco de la Republica",
            "title": "IT Architect",
            "dates": "2012-2015",
            "location": "Bogotá",
            "description": "Architect and design information technology solutions and services for organizations. They posses a strong business and IT background to architect software, hardware, network or any IT solution that gives the best results to the business."
        },
        {
            "employer": "Banco de la Republica",
            "title": "Technical Leader",
            "dates": "2008-2012",
            "location": "Bogotá",
            "description": "Investigates, select, and drive the development of some IT products combining business, technology, and design in order to discover a product that is valuable, feasible, and usable."
        }
    ]
};



var project = {
    "projects": [
        {
            "title": "udacity-html-css",
            "dates": "2017",
            "description": "mini projects from udacity online courses",
            "images": [
                "http://placekitten.com/g/200/200",
                "http://placekitten.com/g/200/200"]
        },
        {
            "title": "udacity-responsive-web",
            "dates": "2017",
            "description": "mini projects from udacity online courses",
            "images": [
                "http://placekitten.com/g/200/200",
                "http://placekitten.com/g/200/200",
                "http://placekitten.com/g/200/200"
            ]
        }
    ]
};
var education = {
    "schools": [
        {
            "name": "UIS",
            "degree": "Systems Engineer",
            "date": "2002",
            "location": "Bucaramanga",
            "mayor": "Engineer"
        },
        {
            "name": "Uniandes",
            "degree": "Software Development Specialist",
            "date": "2007",
            "location": "Bogotá",
            "mayor": "Specialist"

        }
    ],
    "online": [
        {
            "name": "Coursera",
            "title": "Programming Mobile Applications for Android Handheld Systems",
            "schools": "University of Maryland, College Park",
            "date": "2014",
            "url": "https://www.coursera.org/account/accomplishments/certificate/UXRZN296CJ"
        },
        {
            "name": "Coursera",
            "title": "Programming Mobile Applications for Android Handheld Systems: Part 1",
            "schools": "University of Maryland, College Park",
            "date": "2014",
            "url": "https://www.coursera.org/account/accomplishments/certificate/FXYG6XD93T"
        },
        {
            "name": "Coursera",
            "title": "Programming Mobile Applications for Android Handheld Systems: Part 2",
            "schools": "University of Maryland, College Park",
            "date": "2014",
            "url": "https://www.coursera.org/account/accomplishments/certificate/GUBYJLNXQL"
        }
    ]
};


bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLbioPic.replace("%data%", bio.picURL));
    $("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.github));
    $("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.twitter));
    $("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));

    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var indexCount = 0; indexCount < bio.skills.length; indexCount++){
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[indexCount]));
        }
    } 
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        formatworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        formatworkTitle = HTMLworkTitle.replace("%data%", job.title);
        $(".work-entry:last").append(formatworkEmployer + formatworkTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
    })
};

project.display = function(){
    project.projects.forEach (function(myProject){
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", myProject.title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", myProject.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", myProject.description));     
        for (var indexCount = 0; indexCount < myProject.images.length; indexCount++){
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", myProject.images[indexCount]));
        }
    })
};

education.display = function() {
        education.schools.forEach(function(school){
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name));
            $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", school.degree));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.date));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.mayor));
    });
    if(education.online.length > 0) {
            $("#education").append(HTMLonlineClasses);
    }
    education.online.forEach(function(course){
            $("#education").append(HTMLschoolStart);

            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title));
            $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", course.schools));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.date));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));

    });
};


bio.display();
work.display();
project.display();
education.display();



$("#footerContacts").append(internationalizeButton);


function inName(oldName){
    var newName = oldName;
    namesArray = newName.trim().split(" ");
    namesArray[0] = namesArray[0].slice(0,1).toUpperCase() + namesArray[0].slice(1).toLowerCase();
    namesArray[1] = namesArray[1].toUpperCase();
    var newName = namesArray.join(" ");
    return newName;
};


// collect x and y click values and pass them to logClicks function. loc is a jQuery event object that contains information about the click event. http://api.jquery.com/category/events/event-object/
$(document).click(function(loc) {    
    logClicks(loc.pageX,loc.pageY); 
});

$("#mapDiv").append(googleMap);
