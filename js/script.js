const card = document.querySelector('.container');
const cardItm = document.querySelector('.card');
const size = document.querySelectorAll('.size__item');
const color = document.querySelectorAll('.color__item');
const shoe = document.querySelectorAll('.shoe');
const circle = document.querySelector('.circle');
const parallax = document.querySelectorAll('.parallax');
const halfHeight = cardItm.offsetHeight / 2;
const halfWidth = cardItm.offsetWidth / 2;

card.addEventListener('mousemove', startRotate);
card.addEventListener('mouseout', stopRotate);

function startRotate(event) {
	let offsetX = event.pageX - card.offsetLeft;
	let offsetY = event.pageY - card.offsetTop;
	cardItm.style.transform = `rotateX(${-(offsetY - halfHeight) / 100}deg) rotateY(${(offsetX - halfWidth) / 100}deg)`;
};

function stopRotate(event) {
	cardItm.style.transform = 'rotateX(0)';
};

size.forEach((element) => {
	element.addEventListener('click', function () {
		let current = this.getAttribute('current');
		this.classList.add('active');
		size.forEach((element) => {
			if (element.getAttribute('current') !== current) {
				element.classList.remove('active');
			}
		});
	});
});

color.forEach((element) => {
	element.addEventListener('click', function () {
		let currentColor = this.getAttribute('currentColor');
		let current = this.getAttribute('current');
		this.classList.add('active');
		circle.style.background = currentColor;
		shoe.forEach((element) => {
			if (element.getAttribute('color') !== current) {
				element.classList.remove('show');
			}
			else {
				element.classList.add('show');
			}
		})
		color.forEach((element) => {
			if (element.getAttribute('current') !== current) {
				element.classList.remove('active');
			}
		});
	});
});

function parallaxEffect(e) {
	parallax.forEach((element) => {
		const speed = element.getAttribute('data-speed');
		const x = (window.innerWidth - e.pageX * speed) / 100;
		const y = (window.innerHeight - e.pageY * speed) / 100;
		element.style.transform = `translateX(${x}px) translateY(${y}px)`;
	});
}

document.addEventListener('mousemove', parallaxEffect);