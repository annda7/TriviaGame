$(document).ready(function() {
    
    
	$('#countdown').hide();
	$('.trivia-question').hide();
	$('.results').hide();
	$('#game-restart').hide();


	// Declare Variables
	var timer = 30; //seconds
	var intervalId
	var correctCount = 0;
	var wrongCount = 0;
	var unanswered = 0;


  
	function showQuestions(){
		$('#countdown').show();
		$('.trivia-question').show();
		$('#game-done').show();
	
	}

	// function for timer
	function countdownTimer(){
			intervalId = setInterval(decrement, 1000);
	}
   
		// function to decrement timer
	function decrement(){
		timer--;
		$('#timer').html(" " + timer + " " + "seconds");
		if (timer ===1){
			$('#timer').html(" " + timer + " " + "second");
		}
		else if(timer ===0) {
			stop();
			hide();
			displaySummary();
		}
	}

	//function to clear timer
	function stop() {
		clearInterval(intervalId);
	}

	//function to hide text after questions are answered/timed out
	function hide(){
		$('#countdown').hide();
		$('.trivia-question').hide();
		$('#game-done').hide();
	}

	function displaySummary(){
		$('.results').show();
		unanswered = (5-(correctCount+wrongCount));
		$('#correct').text("Correct Answers:" + " " + correctCount); 
		$('#wrong').text("Wrong Answers:" + " " + wrongCount); 
		$('#unanswered').text("Unanswered:" + " " + unanswered); 
		$('#game-restart').show();
	}


  
	$('#game-start').on('click', function(){
		$('#game-start').hide();
		showQuestions();
		countdownTimer();
	}); 

	$('#game-done').on('click', function(){
		$('#game-start').hide(); 
		hide();
		displaySummary();
		stop()
	});

	$('#game-restart').on('click', function(){
		$('#game-start').show();
		$('.results').hide();
		// stop();
		timer = 30;
		$('input[type=radio]').prop('checked', false);
		
	})
	
	$('input[type=radio]').on ('change', function(){
	correctCount = $('input[value=correct]:checked').length;
	wrongCount = $('input[value=wrong]:checked').length;
	unanswered = (5-(correctCount+wrongCount));
	});


});