// 1. Input information and store it
// 2. Validate name, phone number, address
// 3. Add name to guest listtom of the guest list upon submission.

const form = document.getElementById('signInForm');
const firstNameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const phoneNumber = document.getElementById('phoneNumber');
const status = document.getElementById('relationship');
const message = document.getElementById('message');
const error = document.querySelector('.errorMessage');
const error2 = document.querySelector('.errorMessage2');
const previewSection = document.getElementById('previewSection');
const previewText = document.getElementById('previewText');
const editBtn = document.getElementById('editBtn');
const confirmBtn = document.getElementById('confirmBtn');
const guestlistHolder = document.getElementById('guestListContainer');
let firstName = '';
let lastName = '';
let phoneValue = '';
let userMessage = '';


form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('The form has been submitted');

    
    // Clear any previous error
    error.innerHTML = '';
    error.style.display = 'none';

    firstName = document.getElementById('firstNameInput').value.trim();
    lastName = document.getElementById('lastNameInput').value.trim();

    const namePattern = /^[a-zA-Z\s'-]+$/;

    // Validating the first and last name.
    if (!firstName || !namePattern.test(firstName)) {
        error.innerHTML = "Please enter a valid first name!";
        error.style.textAlign = "center";
        error.style.display = "block";
        console.log(`${firstName}`);
        return;
    }

    if (!lastName || !namePattern.test(lastName)) {
        error.innerHTML = "Please enter a valid last name!";
        error.style.textAlign = "center";
        error.style.display = "block";
        console.log(`${lastName}`);
        return;
    }
    

    // Validate phone number
    phoneValue = phoneNumber.value.trim();
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    if(!phoneValue || !phonePattern.test(phoneValue)){
        error2.innerHTML = "Please enter a valid phone number in 000-000-0000 format!";
        error2.style.display = "block";
        console.log(`${phoneValue}`);
        return;
    }

    // Textarea storage 
    userMessage = message.value.trim();
    console.log(`${userMessage}`);


    // Building preview message
    previewText.innerHTML =`
    <strong>Name:</strong> ${firstName} ${lastName}<br><br>
    <strong>Phone Number:</strong> ${phoneValue}<br><br>
    <strong>Message:</strong> ${userMessage}
    `
    previewSection.style.display = 'block';
    form.style.display = 'none';
    

});

confirmBtn.addEventListener("click", function() {
    console.log('The confirm button has been clicked.')
    alert(`Thank you for supporting me ${firstName} ${lastName}!`);
    
    previewSection.style.display = 'none';
    form.style.display = 'flex';
    form.reset();
    guestlist.scrollIntoView({ behavior: "smooth" });




    const guestlist = document.getElementById('guestLists');
    const newName = document.createElement('li');
    newName.style.listStyle = "none";
    newName.style.margin = "auto";
    newName.textContent = `${firstName} ${lastName}`;
    guestlist.appendChild(newName);
    guestlist.style.margin = "auto";

    // Hide the preview section
    previewSection.style.display = "none";

    // Show the form again
    form.style.display ="flex";
    
    // Reset the form
    form.reset();

    // Scroll so guests can see their name
    guestlist.scrollIntoView({ behavior: "smooth" });

    // Adds guest information here
})

editBtn.addEventListener('click', function() {
    console.log('The edit button has been clicked.')
    previewSection.style.display = "none";
    form.style.display ='block';
})
