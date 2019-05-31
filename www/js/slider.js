let toggleButtonBefore = document.querySelector('.example__button--before');
let toggleButtonAfter = document.querySelector('.example__button--after');

let catBefore = document.querySelector('.example__cat--before');


toggleButtonBefore.addEventListener('click', function() {

	catBefore.style.clip = 'rect(auto,690px,auto,auto)';

});