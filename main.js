$('#submit').click(function() {
	var odds = $('#odds').val();
	var team = $('#team').val();
	console.log(odds);
	var winPercentage;

	if(odds < 0) {
		winPercentage = ((-1 * odds) / ((-1 * odds) + 100)) * 100;
	} else {
		winPercentage = (100 / (odds + 100)) * 100;
	}

	console.log(winPercentage);
	var newDiv = $('<p>').html(winPercentage + ' ' + team);
	$('#results').append(newDiv);

})