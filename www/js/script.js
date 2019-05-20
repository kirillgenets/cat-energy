let navToggler = document.querySelector('.nav__toggler');
let navList = document.querySelector('.nav__list');

navToggler.classList.remove('nav__toggler--no-js');
navToggler.classList.add('nav__toggler--closed-menu');

navList.classList.add('nav__list--closed');

navToggler.onclick = () => {

	navList.classList.toggle('nav__list--closed');
	navToggler.classList.toggle('nav__toggler--closed-menu')

};