/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Adriel");

 //var name = "Adriel Regueira";
 //var role = "IT Enginieer";

var skills = ["Networking", "C#", "C++", "SQL", "C"];

var bio = {
	"name" : "Adriel Regueira",
	"role" : "IT Enginieer",
	"contact_info" : "adriel@fastmail.fm",
	"picture_URL" : "images/fry.jpg",
	"welcome_message" : "print('Hello world')",
	"skills" : skills
};

var work = {
	"jobs" : [
		{
			"employer" : "Tecnicas de Soft S.A.",
			"title" : "Software Enginieer",
			"location" : "A Coruña",
			"dates" : "2015",
			"doscription" : ""
		}
	]

};

var education = {
	"schools":
	[
		{
			"name" : "Universidad de Vigo",
			"city" : "Vigo, Galicia, Spain",
			"degree" : "BA",
			"major" : ["Telecomunication", "Embedded software"]
		},
				{
			"name" : "Universidad de Vigo",
			"city" : "Vigo, Galicia, Spain",
			"degree" : "Master",
			"major" : ["Telecomunication Enginieer", "Embedded software"]
		}
	],
	"online":
	[
		{
			"name" : "Front End Web Developer Nanodegree",
			"where" : "Udactie",
			"date" : "2015",
			"URL" : "www.udacity.com"
		},
		{
			"name" : "Introdution to Interactive Programming with Python part I",
			"where" : "coursera",
			"date" : "2015",
			"URL" : "https://www.coursera.org/account/accomplishments/records/RjBGnKP7mgkQKYkV"
		},
		{
			"name" : "Introdution to Interactive Programming with Python part II",
			"where" : "coursera",
			"date" : "2015",
			"URL" : "https://www.coursera.org/account/accomplishments/records/JuGzWntkuTuvRmZh"
		}
	]
};

//TODO un objeto education con un array de schools y array de cursos online.
// datos para el school: name, location, degree, major, dates, url
// datos para online curses: title, school, dates, url

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contact_info);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedImage = HTMLbioPic.replace("%data%", bio.picture_URL);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedEmail);
$("#header").append(formattedWelcomeMessage);
$("#header").append(formattedSkills);
$("#header").append(formattedImage);