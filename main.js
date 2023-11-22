//변수설정
const popup = document.querySelector('#popup');
const btnClose = popup.querySelector('.close');
const btnDel = document.querySelector('.del');
const isCookie = document.cookie.indexOf('today=done');
// const checkBox = popup.querySelector('.ck');

if (isCookie == -1) {
	console.log('쿠키없음');
	popup.style.display = 'block';
} else {
	console.log('쿠키있음');
	popup.style.display = 'none';
}

btnDel.addEventListener('click', (e) => {
	e.preventDefault();
	setCookie('today', 'done', 0);
});

if (i)
	btnClose.addEventListener('click', (e) => {
		e.preventDefault();
		let isChecked = popup.querySelector('input[type=checkbox]').checked;
		if (isChecked) {
			setCookie('today', 'done', 1);
			popup.style.display = 'none';
		}
	});

function setCookie(name, value, due) {
	const today = new Date();
	const date = today.getDate();
	today.setDate(date + due);
	const dueDate = today.toGMTString();
	document.cookie = `${name}=${value}: path="/"; expires=${dueDate}`;
}
