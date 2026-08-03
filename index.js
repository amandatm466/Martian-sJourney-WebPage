/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button

themeButton= document.getElementById('theme-button');

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked

}



// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);



/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const rsvpButton = document.getElementById('rsvp-button'); 


const addParticipant = (person) => {

  // Step 2: Write your code to manipulate the DOM here
  //const nameInput = document.getElementById("name");
  //const eventInput = document.getElementById("event_name");
  //const e_mailInput = document.getElementById("e_mail");

  //const name = nameInput.value.trim();
  //const eventName = eventInput.value.trim();
  //const email = e_mailInput.value.trim();
  

  const newP = document.createElement("p");
  newP.textContent = `🎟️ ${person.name} from ${person.event} has RSVP'd.`;
    
  const container = document.querySelector(".rsvp-participants");
  container.appendChild(newP);

  //nameInput.value = "";
  //document.getElementById("e_mail").value = "";
  //eventInput.value = "";

};
// Step 3: Add a click event listener to the submit RSVP button here
//rsvpButton.addEventListener("click", addParticipant)


/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {
  event.preventDefault();

  let containsErrors = false;

  var rsvpInputs = document.getElementById('rsvp-form').elements;

  let person = {
    name: rsvpInputs[0].value,
    email: rsvpInputs[1].value,
    event: rsvpInputs[2].value

  };

  // TODO: Loop through all inputs
  for (let i = 0; i < rsvpInputs.length; i++) {
    if (rsvpInputs[i].value.length < 2) {
      containsErrors = true;
      rsvpInputs[i].classList.add("error");
    } else {
      rsvpInputs[i].classList.remove("error");
    }
  }

  if (!person.email.includes("@")) {
    containsErrors = true;
    rsvpInputs[1].classList.add("error");
  }

  // TODO: If no errors, call addParticipant() and clear fields
  if (!containsErrors) {
    addParticipant(person);
    toggleModal(person);

    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";
    }
  }
};

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener("click", validateForm);




/*** Scroll Animations ***
  
  Purpose:
  - Use this starter code to add scroll animations to your website.

  When To Modify:
  - [ ] Project 8 (REQUIRED FEATURE)
  - [ ] Any time after
***/

// Step 1: Select all elements with the class 'revealable'.
let revealableContainers = document.querySelectorAll('.revealable');

// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];

        // Get current height of container and window
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {
            current.classList.add('active');
        }
        // If the container is not within range, hide it by removing the 'active' class
        else { 
            current.classList.remove('active');
        }
    }
}
// Stretch Feature- motion button
let motionButton = document.getElementById("motion-button");


const reduceMotion = () => {
    document.body.classList.toggle("reduce-motion");
}
// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener("scroll", reveal);
motionButton.addEventListener("click", reduceMotion);




/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    //let modal = 0; // TODO
    let modal = document.getElementById('success-modal');
    let modalContent= document.getElementById('modal-text');

    modal.style.display ="flex";
    
    // TODO: Update modal display to flex
    modal.style.display ="flex";

    // TODO: Update modal text to personalized message
    modalContent.innerHTML = `
        <strong>Invitation Status: ACCEPTED</strong>
        <br><br>
        ${person.name}, you are in! Pack your bags and ready your camera roll. Start sharing about your trip and see what others' itinerary looks like for this event.
    `;

  let intervalId = setInterval(animateImage, 500);

    // Set modal timeout to 5 seconds
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 5000)
    
}

// TODO: animation variables and animateImage() function

let rotateFactor =0;
let modalImage = document.getElementById('modal-image');

let animateImage=()=>{
  
  if (rotateFactor ==0){
    rotateFactor= 10;
  }
  else{
    rotateFactor= 0;
  }

  modalImage.style.transform = `rotate(${rotateFactor}deg)`;

}
