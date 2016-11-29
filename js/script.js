$(document).one('pageinit', function() {
	// Add Handler
	$('#submitAdd').on('tap', addRun);

	/*
	* 	Add a Run
	*/
	function addRun(){
		// Set form values
		var miles =  $('#addMiles').val();
		var date = $('#addDate').val();

		//Create 'run' object
		var run = {
			date: date,
			miles: parseFloat(miles)
		};

		var runs = getRunsObject();

		// Add run to runs array
		runs.push(run);

		alert('Run Added');

		//Set Stringified objects to local storage
		localStorage.setItem('runs', JSON.stringify(runs));

		// Redirect
		window.location.href  = 'index.html';

		return false;
	}

	/*
	*	Get the runs object
	*/
	function getRunsObject() {
		// Set runs array
		var runs = new Array();
		// Get current runs from local storage
		var currentRuns = localStorage.getItem('runs');

		// Check local storage
		if(currentRuns != null){
			// Set to runs
			var runs = JSON.parse(currentRuns);
		}

		// Return runs object
		return runs.sort(function(a, b){
			return new Date(b.date) - new Date(a.date)
		});
	}
});