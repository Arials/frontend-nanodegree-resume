/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
	'name' : 'Adriel Regueira',
	'role' : 'IT Enginieer',
	'contacts' :{
	 	'mobile' : '+34600101010',
	 	'email' : 'adriel@fastmail.fm',
	 	'github' : 'Arials',
	 	'twitter' : 'adrielre',
	 	'location' : 'A Coruña, Spain'
	},
	'welcomeMessage' : 'Efficiency Matters',
	'skills' : [
		'Networking',
		'C#',
		'C++',
		'SQL',
		'C'
	],
	'biopic' : 'images/fry.jpg',
	'display' : function(){
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
		var formattedSkills = HTMLskills.replace('%data%', bio.skills);
		var formattedImage = HTMLbioPic.replace('%data%', bio.biopic);
		var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

		$('#header').prepend(formattedRole);
		$('#header').prepend(formattedName);
		$('#topContacts, #footerContacts').append(formattedEmail);
		$('#topContacts, #footerContacts').append(formattedTwitter);
		$('#topContacts, #footerContacts').append(formattedGithub);
		$('#topContacts, #footerContacts').append(formattedMobile);
		$('#topContacts, #footerContacts').append(formattedLocation);
		$('#header').append(formattedWelcomeMessage);
		$('#header').append(formattedImage);


		if (bio.skills.length > 0){
			$('#header').append(HTMLskillsStart);
			var formattedSkills = HTMLskills.replace('%data%', bio.skills[0]);
			$('#skills').append(formattedSkills);
			var formattedSkills = HTMLskills.replace('%data%', bio.skills[1]);
			$('#skills').append(formattedSkills);
			var formattedSkills = HTMLskills.replace('%data%', bio.skills[2]);
			$('#skills').append(formattedSkills);
			var formattedSkills = HTMLskills.replace('%data%', bio.skills[3]);
			$('#skills').append(formattedSkills);
			var formattedSkills = HTMLskills.replace('%data%', bio.skills[4]);
			$('#skills').append(formattedSkills);
		};
	}
};

var work = {
	'jobs' : [
		{
			'employer' : 'Tecnicas de Soft S.A.',
			'title' : 'Software Enginieer',
			'location' : 'A Coruña, Spain',
			'dates' : '2015',
			'description' : 'Some description'
		},
		{
			'employer' : 'Tecnicas de Soft S.A.',
			'title' : 'Software Developer',
			'location' : 'A Coruña, Spain',
			'dates' : '2011 - 2013',
			'description' : 'A little description'
		}
	],
	'display' : function(){
		var len = work.jobs.length;

		for (var job = 0; len > job; job++){
			$('#workExperience').append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
			var formattedJobTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
			formattedEmployerJob = formattedEmployer + formattedJobTitle;
			var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
			var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
			$('.work-entry:last').append(formattedEmployerJob);
			$('.work-entry:last').append(formattedLocation);
			$('.work-entry:last').append(formattedDates);
			$('.work-entry:last').append(formattedDescription);
		}
	}

};


var projects ={
	'info' : [
		{
			'title' : 'Warehouse control system',
			'dates' : '2015',
			'description' : 'Complete software made in C# (.NET) for control a wood factory and its storage. From PLC controllers, to BBDD to store data and the client software throw WCF.',
			'images' :
			[
				{
					'URL' : 'images/197x148.gif'
				}
			]

		},
		{
			'title' : 'Mobile SCADA system',
			'dates' : '2013',
			'description' : 'Design and implementation of a custom protocol using UDP for controlling industry process with mobile phones. Made with marmelade in C++.',
			'images' :
			[
				{
					'URL' : 'images/197x148.gif'
				}
			]

		}
	],
	'display' : function display()
		{
			var len = projects.info.length;

			for (var project = 0; len > project; project++){
				$('#projects').append(HTMLprojectStart);
				var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.info[project].title);
				var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.info[project].dates);
				var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.info[project].description);
				var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.info[project].images[0].URL);
				$('.project-entry:last').append(formattedProjectTitle);
				$('.project-entry:last').append(formattedProjectDates);
				$('.project-entry:last').append(formattedProjectDescription);
				$('.project-entry:last').append(formattedProjectImage);
			}

		}
};

var education = {
	'schools' :[
		{
			'name' : 'Universidad de Vigo',
			'location' : 'Vigo, Spain',
			'degree' : 'BA',
			'majors' : ['Telecommunications', 'Embedded software'],
			'dates': 2013,
			'url' : 'http://teleco.uvigo.es/index.php/gl/'
		},
		{
			'name' : 'Universidad de Vigo',
			'location' : 'Vigo, Spain',
			'degree' : 'Master',
			'majors' : ['Telecommunications Enginieer', 'Embedded software'],
			'dates' : 2015,
			'url' : 'http://teleco.uvigo.es/index.php/gl/'
		}
	],
	'online' :[
		{
			'title' : 'Front End Web Developer Nanodegree',
			'school' : 'Udacity',
			'date' : '2015',
			'URL' : 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		},
		{
			'title' : 'Introdution to Interactive Programming with Python part I',
			'school' : 'coursera',
			'date' : 2015,
			'URL' : 'https://www.coursera.org/account/accomplishments/records/RjBGnKP7mgkQKYkV'
		},
		{
			'title' : 'Introdution to Interactive Programming with Python part II',
			'school' : 'coursera',
			'date' : 2015,
			'URL' : 'https://www.coursera.org/account/accomplishments/records/JuGzWntkuTuvRmZh'
		}
	],
	'display' : function(){
		var len = education.schools.length;

		for (var school = 0; len > school; school++){
			$('#education').append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
			var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
			var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
			var formattedMajors = HTMLschoolMajor.replace('%data%', education.schools[school].majors);
			var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
			var formattedNameDegree = formattedName.concat(formattedDegree);
			$('.education-entry:last').append(formattedNameDegree);
			$('.education-entry:last').append(formattedDates);
			$('.education-entry:last').append(formattedLocation);
			$('.education-entry:last').append(formattedMajors);
		}

		$('#education').append(HTMLonlineClasses);
		len = education.online.length;

		for (var online = 0; len > online; online++){
			$('#education').append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace('%data%', education.online[online].title);
			var formattedSchool = HTMLonlineSchool.replace('%data%', education.online[online].school);
			var formattedDate = HTMLonlineDates.replace('%data%', education.online[online].date);
			var formattedURL = HTMLonlineURL.replace('%data%', education.online[online].URL);
			var formattedTitleSchool = formattedTitle.concat(formattedSchool);
			$('.education-entry:last').append(formattedTitleSchool);
			$('.education-entry:last').append(formattedDate);
			$('.education-entry:last').append(formattedURL);
		}

	}
};


work.display();
education.display();

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

function inName(name_obj){
	var nameTemp = 'Adriel Regueira'.split(' ');
	var lastName = nameTemp[1].toUpperCase();
	var firstName = nameTemp[0].toLowerCase();
	var firstCharacter = firstName[0].toUpperCase();
	firstName = firstCharacter + firstName.slice(1);
	return firstName + ' ' + lastName;
}

bio.display();

//$('#main').append(internationalizeButton);

projects.display();

$('#mapDiv').append(googleMap);