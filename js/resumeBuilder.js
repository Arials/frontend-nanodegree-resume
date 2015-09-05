/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Adriel");
 var awesomeThoughts = "I am Adriel and I am AWESOME";
 console.log(awesomeThoughts);

 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 console.log(funThoughts);

 var name = "Adriel Regueira";
 var role = "IT Enginieer";

 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 $("#header").append(formattedName);
 $("#header").append(formattedRole);