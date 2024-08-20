/* create footer element */
const footer = document.createElement("footer");
footer.className = "footer"; 
document.body.appendChild(footer); 

/* create date variable to get current year */
var today = new Date(); 
var thisYear = today.getFullYear(); 

/* select footer element */
var newFooter = document.querySelector("footer");

/* create copyright element and text line */
var copyright = document.createElement("p"); 
const copyrightSymbol = '\u00A9';
var copyrightText = copyrightSymbol + "Lily Carrillo " + thisYear; 
copyright.innerHTML = copyrightText;

/* append copyright text to footer element */ 
newFooter.appendChild(copyright); 

/* create skills array list and append to skills section */
const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
var skillsSection = document.getElementById("skills");
var skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    var skill = document.createElement("li"); 
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}