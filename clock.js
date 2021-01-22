const clockzip = document.querySelector('.js-clock'),
	h1 = clockzip.querySelector('h1');

function getClock() {
	const date = new Date();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();
	h1.innerText = `${hour < 10 ? `0${hour}` : hour} : ${
		minute < 10 ? `0${minute}` : minute
	} :  ${second < 10 ? `0${second}` : second}`;
}

function init() {
	getClock();
	setInterval(getClock, 1000);
}

init();
