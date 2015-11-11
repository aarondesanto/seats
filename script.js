$(document).ready(function() {

function populateSeats(numberOfSeats, numberOfRows) {
	for (var i = 0; i < numberOfRows; i++) {
		$('body').prepend("<div class='row'></div>");
	}
	for (var j = 0; j < ((numberOfSeats - (numberOfSeats % numberOfRows)) / numberOfRows); j++) {
		$('.row').append("<div class='seat'></div>");
	}
	$('body').append("<div class='back'></div>");
	$('.back').append("<div class='back-row'></div>");
	for (var k = 0; k < (numberOfSeats % numberOfRows); k++) {
		$('.back-row').append("<div class='seat'></div>");
	}
	for (var l = 0; l < (numberOfRows - (numberOfSeats % numberOfRows)) / 2; l++) {
		$('.back-row').before("<div class='not-seat'></div>");
	}
	return false;
};

populateSeats(184, 12);


});