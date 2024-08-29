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

/* callback for remove button */
function onRemoveButton(event) {
    const entry = event.target.parentNode;
    entry.remove();

    /* hide messages section if list is empty */
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.getElementsByTagName("li");
    if (messageList.length === 0) {
        messageSection.hidden = true; 
    }
}

/* submit button callback function */
function formSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target); 
    const userName = data.get("usersName");
    const email = data.get("usersEmail");
    const message = data.get("usersMessage");
    console.log(userName);
    console.log(email);
    console.log(message); 

    /* select messages section */
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.getElementsByTagName("ul"); 

    /* display messages section shows up when there is a message in list */
    messageSection.hidden = false;

    /*create new li element with message information when message is submitted */ 
    const newMessage = document.createElement("li");
    var messageString = `<a href="mailto:${email}">${userName}</a> message: <span>${message}</span>`;
    newMessage.innerHTML = messageString;

    /* create remove button */
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("id", "removeButtonID");
    removeButton.addEventListener("click", onRemoveButton);

    /* add remove button to message item */
    newMessage.appendChild(removeButton);

    /* add message item to list */
    messageList[0].appendChild(newMessage); 

    /* clear form once message is submitted */
    event.target.reset();
}

/* select leave_message section */
var messageForms = document.getElementsByName("leave_message"); 
var messageForm = messageForms[0];

/* select messages section and hide messages section by default */
const messageSection = document.getElementById("messages");
messageSection.hidden = true;  

/* add event listener to submit button with callback function */
messageForm.addEventListener("submit", formSubmit);
