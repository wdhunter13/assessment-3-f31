console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted successfully")
}

let picture = document.querySelector('img')
picture.addEventListener('mouseover', () => {
	alert("You are cool!");
})




let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);