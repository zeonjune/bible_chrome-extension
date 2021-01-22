const todoInput = document.querySelector('.js-todoinput'),
	ul = document.querySelector('ul');
let todos = [];

function handleTodo(event) {
	event.preventDefault();
	const currentTodo = todoInput.value;
	paintTodo(currentTodo);
	todoInput.value = '';
}

function saveToDo() {
	localStorage.setItem('todos', JSON.stringify(todos));
}

function paintTodo(text) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	const delBtn = document.createElement('button');

	delBtn.addEventListener('click', handleDelete);

	const newId = todos.length + 1;
	li.id = newId;
	const toDoObj = {
		text: text,
		id: newId,
	};
	li.appendChild(span);
	li.appendChild(delBtn);

	ul.appendChild(li);
	span.innerHTML = text;

	delBtn.innerHTML = '✖';
	todos.push(toDoObj);
	saveToDo();
}

function handleDelete(event) {
	const btn = event.target;
	const li = btn.parentNode;
	ul.removeChild(li);
	const cleanToDos = todos.filter(function (toDo) {
		return toDo.id !== parseInt(li.id);
	});
	todos = cleanToDos;
	saveToDo();
}

function loadTodo() {
	const loadedToDos = localStorage.getItem('todos');
	if (loadedToDos) {
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(function (toDo) {
			paintTodo(toDo.text);
		});
	}
}
function init() {
	todoForm.addEventListener('submit', handleTodo);
	loadTodo();
}

init();
