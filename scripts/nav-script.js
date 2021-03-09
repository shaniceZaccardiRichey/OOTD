var toggleButton = document.querySelector('.toggle-button');
var navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
});


var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

if(modalBtn) {
	modalBtn.addEventListener('click', function(){
		modalBg.classList.add('bg-active');
	});
}

if(modalClose) {
	modalClose.addEventListener('click', function(){
		modalBg.classList.remove('bg-active');
	});
}

