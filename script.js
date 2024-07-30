// console.log('Its working')

let theme = localStorage.getItem('theme');

if(theme == null){
	setTheme('light');
}else{
	setTheme(theme);
}

let csrfToken = localStorage.getItem('csrfToken');

let themeDots = document.getElementsByClassName('theme-dot')
fetch('http://ec2-35-173-138-5.compute-1.amazonaws.com/contact/api/csrf/')
    .then(response => response.json())
    .then(data => {
        console.log('CSRF Token:', data.csrfToken);
        localStorage.setItem('csrfToken', data.csrfToken);
        csrfToken=data.csrfToken;
    })
    .catch(error => console.error('Error fetching CSRF token:', error));

document.addEventListener('DOMContentLoaded', function() {
    // Attaching the event listener after the DOM content is fully loaded
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission

        // Get CSRF token from localStorage
        

        // Prepare FormData object from the form
        const formData = new FormData(form);

        // Make the fetch POST request
        fetch('http://ec2-35-173-138-5.compute-1.amazonaws.com/contact/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrfToken  // Ensure CSRF token is included in the headers
                // Note: 'Content-Type' header is not needed when using FormData
            },
            body: formData  // Pass form data as the body
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Thank you for your message!'); // Show a success message to the user
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.'); // Show an error message to the user
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var readMoreBtn = document.getElementById('read-more'); // Get the read-more div
    var moreContent = document.getElementById('more-about-me'); // Get the more-about-me div

    readMoreBtn.addEventListener('click', function() {
        // Toggle visibility of the more-about-me content
        if (moreContent.style.display === "none") {
            moreContent.style.display = "block";
            readMoreBtn.textContent = "Click to Read Less"; // Change text to "Read Less"
        } else {
            moreContent.style.display = "none";
            readMoreBtn.textContent = "Click to Read More"; // Change text back to "Read More"
        }
    });
});

function toggleAboutMe() {
    var moreContent = document.getElementById("more-about-me");
    var buttonText = event.target; // Getting the button that triggered the event

    // Check the current display style and toggle it
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block"; // Show the rest of the content
        buttonText.textContent = "Read Less"; // Optionally change the button text
    } else {
        moreContent.style.display = "none"; // Hide the content
        buttonText.textContent = "Read More"; // Reset the button text
    }
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}