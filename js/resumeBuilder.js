
var bio = {
	"name" : "Ankit Gupta",
	"welcomeMessage" : "Welcome to the portfolio of the Greatest Man Alive",
	"skills" : ["Analytics", "Programming", "HTML5", "Minerals", "jQuery", "JavaScript", "Engineering", "Graphic Designing"],
	"contacts" : [{
    "Mobile" :"917073232208",
	"Email" :  "ank92gwalior@gmail.com",
	"Github" : "ankit-gupta1307",
	"Twitter" : "@SankiAnki",
	"location" : "New Delhi"}],
	"role" : "Web Developer",
	"biopic": "images/DSCN3.JPG"
	} 

var work = {
	"jobs" : [{
	"title": "Process Engineer",
	"employer": "Vedanta Resources Plc",
	"title": "Process Engineer",
	"workEx": "1 year",
    "location": "Rampura Agucha",
	"dates": "4-10-2014 to 4-10-2015",
	"description" : "I was working as Engineer cum manager where my role was to manage the quantity and quality of the materials produced in the whole shift"
	}]
}

var projects = {
	"projects" : [{
	"title" : "Analysis of Australian coal mining company incident database",
	"dates" : "10-12-2013 to 28-1-2015",
	"description" : "In this project I had to assess, analyse and classify thousands of incidents  that was being reported by 5 mining sites in Australia",
	"images" : "vgadfa",
	"location": "Brisbane"
	}]
}

var education = {
	"schools" : [{
		"name": "Little Angels High School",
		"degree": "High School",
		"dates" : "April 2006 - March 2007",
		"location": "Gwalior",
	    "major": "none" },
		{
	    "name": "Upras Vidyalaya",
		"degree": "Higher Secondary School",
		"dates" : "April 2008 - March 2009",
		"location": "New Delhi",
	    "major": "none"
		},
		{
		"name": "Indian School of Mines",
		"degree": "Bachelor of Technology",
		"dates" : "April 2010 - March 2014",
		"location": "Dhanbad",
	    "major": "Mineral Processing"
		}],
		
	"onlineCourses" : [{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"date" : 2016,
	        "url" : "http://www.udacity.com"},
			{
			"title" : "Fundamentals of JavaScript",
			"school" : "CodeAcademy",
			"date" : 2016,
	        "url" : "http://www.codeacademy.com"	
			},
			{
            "title" : "Fundamentals of jQuery",
			"school" : "CodeAcademy",
			"date" : 2016,
	        "url" : "http://www.codeacademy.com"
		   }]	
		   }
		   
		   

    





    
	
	
	 
	 // Here we are defining the display function as a property inside the work object
   	 work.display = function() { 
	 for(job in work.jobs) {
	 $("#workExperience").append(HTMLworkStart);
	 
	 var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	 var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	 var formattedEmployerTitle = formattedEmployer + formattedTitle;
	 $(".work-entry:last").append(formattedEmployerTitle);
	 
	 var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	 $(".work-entry:last").append(formattedDates);
	 
	 var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	 $(".work-entry:last").append(formattedDescription);
	 }
	 }
	 work.display();
	 
	 
	 
	function inName(name) {
    var newName = name;
    var names = name.split(" ");
	names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    newName = names.join(" ");
    return newName;
    }
	inName(bio.name);
		 
	  $("#main").append(internationalizeButton); 
	  
	  
		  
		  
	  
	  //Here we are displaying our project section
	  projects.display = function() {
		  for (pro in projects.projects) {
		  	  
		  $("#projects").append(HTMLprojectStart);
		  
		  var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[pro].title);
		  $(".project-entry:last").append(formattedTitle);
		  
		  var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[pro].dates);
		  $(".project-entry:last").append(formattedDates);
		  
		  var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[pro].description);
		  $(".project-entry:last").append(formattedDescription);
		  
	  } }
	  projects.display();
	  
	  
	  //Now we display our education section
	  
	  education.display = function() {
			   for(edu in education.schools) {
				   $("#education").append(HTMLschoolStart);
				   
				   var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
				   var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
				   var formattedNameDegree = formattedName + formattedDegree ; 
				   $(".education-entry:last").append(formattedNameDegree);
				   
				   var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
				   $(".education-entry:last").append(formattedDates);
				   
				   var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
				   $(".education-entry:last").append(formattedLocation);
				   
				   var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
				   $(".education-entry:last").append(formattedMajor);
				   
				  }
				  
				    $(".education-entry:last").append(HTMLonlineClasses);

					for (course in education.onlineCourses) {
						
					var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
					var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
					$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

					var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
					$(".education-entry:last").append(formattedOnlineDates);

					var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
					$(".education-entry:last").append(formattedOnlineURL);
				}
			   
		   }
		   
		   education.display();
		   
		   //Now its' time to display bio
		   
		   bio.display = function()  {
	      for (contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].Mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);

		var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].Email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);

		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].Github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);

		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].Twitter);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);

		var formattedLocation1 = HTMLlocation.replace("%data%", bio.contacts[contact].location);
		$("#topContacts").append(formattedLocation1);
		$("#footerContacts").append(formattedLocation1);
	}

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills-h3").append(formattedSkill);
		
		
	}
}
bio.display();

//Displaying GoogleMap

$("#mapDiv").append(googleMap);
		   
		   
		   
		  
		   
		   
	  
	  
	  
	 

