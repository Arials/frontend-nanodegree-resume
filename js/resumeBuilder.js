/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
	"name" : "Adriel Regueira",
	"role" : "Telecomunication Enginieer",
	"contacts" :
	{
	 	"mobile" : "",
	 	"email" : "adriel@fastmail.fm",
	 	"github" : "Arials",
	 	"twitter" : "adrielre",
	 	"location" : "A Coruña, Spain"
	},
	"welcomeMessage" : "print('Hello world')",
	"skills" : ["Networking", "C#", "C++", "SQL", "C"]
};

var work = {
	"jobs" : [
		{
			"employer" : "Tecnicas de Soft S.A.",
			"title" : "Software Enginieer",
			"location" : "A Coruña",
			"dates" : "2015",
			"description" : "Some description"
		},
		{
			"employer" : "Tecnicas de Soft S.A.",
			"title" : "Software Developer",
			"location" : "A Coruña",
			"dates" : "2011 - 2013",
			"description" : "A little description"
		}
	]

};

var projects =
	[
	{
		"title" : "",
		"dates" : "",
		"description" : "",
		"images" :
		[
			{
				"URL" : ""
			}
		]
	}
	];

var education = {
	"schools":
	[
		{
			"name" : "Universidad de Vigo",
			"city" : "Vigo, Galicia, Spain",
			"degree" : "BA",
			"major" : ["Telecommunications", "Embedded software"]
		},
				{
			"name" : "Universidad de Vigo",
			"city" : "Vigo, Galicia, Spain",
			"degree" : "Master",
			"major" : ["Telecommunications Enginieer", "Embedded software"]
		}
	],
	"online":
	[
		{
			"name" : "Front End Web Developer Nanodegree",
			"school" : "Udactie",
			"date" : "2015",
			"URL" : "www.udacity.com"
		},
		{
			"name" : "Introdution to Interactive Programming with Python part I",
			"scool" : "coursera",
			"date" : "2015",
			"URL" : "https://www.coursera.org/account/accomplishments/records/RjBGnKP7mgkQKYkV"
		},
		{
			"name" : "Introdution to Interactive Programming with Python part II",
			"school" : "coursera",
			"date" : "2015",
			"URL" : "https://www.coursera.org/account/accomplishments/records/JuGzWntkuTuvRmZh"
		}
	]
};

var formattedName =

$("#main").append()

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkills);
};

function displayWork()
{
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		formattedEmployerJob = formattedEmployer + formattedJobTitle;
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerJob);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	};
}

displayWork();

$(document).click(function(loc) {
  // your code goes here
  // console.log("X: " + loc.pageX);
  // console.log("Y: " + loc.pageY);
  logClicks(loc.pageX, loc.pageY);
});

function inName(name)
{
	return "Prueba";
}

$("#main").append(internationalizeButton);