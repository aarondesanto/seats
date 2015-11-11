$(document).ready(function() {

function populateSeats(numberOfSeats, numberOfRows) {
	for (var i = 0; i <= numberOfRows; i++) {
		$('body').prepend("<div class='row'></div>");
	}
	for (var j = 0; j <= (numberOfSeats / 4); j++) {
		$('.row').append("<div class='seat'></div>");
	}
	return false;
};

populateSeats(16, 4);


});