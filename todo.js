const todoInput = document.querySelector('.js-todoinput'),
	ul = document.querySelector('ul');
let todos = [];

function handleTodo(event) {
	event.preventDefault();
	const li = document.createElement('li');
	const span = document.createElement('span');
	const delBtn = document.createElement('button');
	const currentTodo = todoInput.value;
	const newId = todos.length + 1;
	const toDoObj = {
		text: currentTodo,
		id: newId,
	};
	li.appendChild(span);
	li.appendChild(delBtn);
	ul.appendChild(li);
	span.innerHTML = currentTodo;
	delBtn.innerHTML = '✖';
	todos.push(toDoObj);
	saveToDo();
	todoInput.value = '';
	paintTodo();
}

function saveToDo() {
	localStorage.setItem('todos', JSON.stringify(todos));
}

function paintTodo() {}

function init() {
	todoForm.addEventListener('submit', handleTodo);
}

init();
