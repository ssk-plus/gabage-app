jQuery(function($){

	let imgs = $('.slider img');
	let page = 0;
	let lastPage = imgs.length;

  $(document).ready(function(){
		imgs.eq(page).removeClass('slide');
	});

	$(document).on('click', '.slide-back', function() {
		imgs.eq(page).addClass('slide');
		page--;
		imgs.eq(page).removeClass('slide');
	});

	$(document).on('click', '.slide-next', function() {
		imgs.eq(page).addClass('slide');
		page++;
		imgs.eq(page).removeClass('slide');
	});

});
