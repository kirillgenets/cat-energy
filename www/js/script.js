let navToggler = document.getElementsByClassName('nav__toggler')[0];
let navList = document.getElementsByClassName('nav__list')[0];

navToggler.classList.remove('nav__toggler--no-js');
navToggler.classList.add('nav__toggler--closed-menu');

navList.classList.add('nav__list--closed');

navToggler.addEventListener('click', function() {

	navList.classList.toggle('nav__list--closed');
	navToggler.classList.toggle('nav__toggler--closed-menu')

});