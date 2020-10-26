jQuery(function($){

	$(document).on('click', '.btn-modal-open, .btn-modal-close', function() {
		$('.overlay').toggle();
		$('.area-modal').toggle();
	})
	
});
