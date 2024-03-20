console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}
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