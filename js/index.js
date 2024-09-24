/* create mobile nav menu */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

/* close nav menu when link is clicked */
const navItem = document.querySelectorAll(".navItem");
navItem.forEach(event => event.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/* create footer element */
const footer = document.createElement("footer");
footer.className = "footer"; 
document.body.appendChild(footer); 

/* create date variable to get current year */
let today = new Date(); 
let thisYear = today.getFullYear(); 

/* select footer element */
let newFooter = document.querySelector("footer");

/* create copyright element and text line */
let copyright = document.createElement("p"); 
const copyrightSymbol = '\u00A9';
let copyrightText = copyrightSymbol + "Lily Carrillo " + thisYear; 
copyright.innerHTML = copyrightText;

/* append copyright text to footer element */ 
newFooter.appendChild(copyright); 

/* create skills array list and append to skills section */
const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li"); 
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
    let messageString = `<a href="mailto:${email}">${userName}</a> message: <span>${message}</span>`;
    newMessage.innerHTML = messageString;

    /* create remove button */
    let removeButton = document.createElement("button");
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
let messageForms = document.getElementsByName("leave_message"); 
let messageForm = messageForms[0];

/* select messages section and hide messages section by default */
const messageSection = document.getElementById("messages");
messageSection.hidden = true;  

/* add event listener to submit button with callback function */
messageForm.addEventListener("submit", formSubmit);

/* created GET request for github repos */
fetch("https://api.github.com/users/alcarrillomunoz/repos")
    .then(response => {
        if (!response.ok) {
            throw new Error('Request failed');
          }
        return response.json();
    })
    .then(data => {
        /* create respositories element to store array */ 
        repositories = [...data];
        /* create project section selector  */
        const projectSection = document.getElementById("projects"); 
        const projectList = projectSection.querySelector("ul");

        /* loop through repositories array and add list of repositories to projects section */
        for (let i = 0; i < repositories.length; i++) {
            let project = document.createElement("li"); 
            let projectLink = document.createElement("a");
            projectLink.className = "projectLink";
            projectLink.innerText = repositories[i].full_name;
            /* create clickable link to each respository */ 
            projectLink.href = repositories[i].html_url;
            projectLink.target = '_blank';
            console.log(projectLink);
            projectList.appendChild(project);
            projectList.appendChild(projectLink);
        }
    })
    /* catch error and display message if error */ 
    .catch(error => {
        console.error('An error occurred:', error);
    });