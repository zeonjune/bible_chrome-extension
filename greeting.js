const greetingForm = document.querySelector('.js-greeting'),
	greetingInput = greetingForm.querySelector('.js-input'),
	greetingh1 = document.querySelector('.js-name'),
	USER_LS = 'userName',
	DELETE = 'delete',
	edit = document.querySelector('.edit'),
	body = document.querySelector('body'),
	todoForm = document.querySelector('.js-todo');

function paintImage() {
	const image = new Image();

	image.src = 'images/1.jpg';

	image.classList.add('bgimage');

	body.appendChild(image);
}

function saveName(text) {
	localStorage.setItem(USER_LS, text);
}

function paintgreeting(text) {
	greetingForm.classList.add(DELETE);
	greetingh1.innerHTML = text;
	greetingh1.classList.remove(DELETE);
	edit.classList.remove(DELETE);
}

function handleSubmit(event) {
	event.preventDefault();
	const currentValue = greetingInput.value;
	paintgreeting(currentValue);
	saveName(currentValue);
	// todoForm.classList.remove(DELETE);
}

function editName() {
	edit.classList.remove(DELETE);
	edit.addEventListener('click', handleEdit);
}

function handleEdit(event) {
	event.preventDefault();
	localStorage.removeItem(USER_LS);
	greetingForm.classList.remove(DELETE);
	greetingh1.classList.add(DELETE);
	edit.classList.add(DELETE);
	askName();
}

function askName() {
	greetingForm.addEventListener('submit', handleSubmit);
}

function init() {
	const userName = localStorage.getItem(USER_LS);
	if (userName === null) {
		askName();
		paintImage();
		// todoForm.classList.add(DELETE);
	} else {
		editName();
		paintgreeting(userName);
		paintImage();
	}
}

init();
