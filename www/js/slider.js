let toggleButtonBefore = document.querySelector('.example__button--before');
let toggleButtonAfter = document.querySelector('.example__button--after');

let catBefore = document.querySelector('.example__cat--before');
let catAfter = document.querySelector('.example__cat--after');

toggleButtonBefore.addEventListener('click', function() {

	catAfter.classList.remove('example__cat--shown');
	catBefore.classList.remove('example__cat--hidden');
	catBefore.classList.add('example__cat--shown');


});

toggleButtonAfter.addEventListener('click', function() {

	catBefore.classList.remove('example__cat--shown');
	catBefore.classList.add('example__cat--hidden');
	catAfter.classList.add('example__cat--shown');

});