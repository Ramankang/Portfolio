$(document).ready(function() {
	var attackOptions = ["rock", "paper", "scissor"];
	var round = 1;
	var player1Count = 0;
	var player2Count = 0;
	$('.player1').change(function() {
		var val = $('.player1 option:selected').text();
		if (val === "Human") {
			$('#1').attr("attacker", "");
			$('#player1HumanOptions').removeClass('d-none');
		}
		else {
			$('#1').attr("attacker", "");
			$('#player1HumanOptions').addClass('d-none');	
		}
	});
	$('.player2').change(function() {
		var val = $('.player2 option:selected').text();
		if (val === "Human") {
			$('#2').attr("attacker", "");
			$('#player2HumanOptions').removeClass('d-none');
		}
		else {
			$('#2').attr("attacker", "");
			$('#player2HumanOptions').addClass('d-none');	
		}
	});
	$('a').click(function() {
		var selectedBy = $(this).attr("player");
		var selectedOption = $(this).attr("value");
		$('#'+selectedBy).attr("attacker",selectedOption);
		$('#'+selectedBy).html('<img src="img/'+selectedOption+'.png" width="50px">');
	});
	$('#start').click(function() {
		var player1Type = $('.player1 option:selected').text();
		var player2Type = $('.player2 option:selected').text();
		if (player1Type === "Computer") {
			var selectedOption = attackOptions[Math.floor(Math.random() * 3)];
			$('#1').attr("attacker", selectedOption);
		}
		if (player2Type === "Computer") {
			var selectedOption = attackOptions[Math.floor(Math.random() * 3)];
			$('#2').attr("attacker", selectedOption);
		}
		var player1Attack = $('#1').attr("attacker");
		var player2Attack = $('#2').attr("attacker");
		if (player1Attack!=="" && player2Attack!=="") {
			$('#1').html('<img src="img/'+player1Attack+'.png" width="50px">');
			$('#2').html('<img src="img/'+player2Attack+'.png" width="50px">');
			var result = rounds(player1Attack, player2Attack);
			if (result == 0) {
				resultText = "Tie";
			}
			else if (result == 1) {
				resultText = "Player "+result; 
				player1Count++;
			}
			else if (result == 2) {
				resultText = "Player "+result; 
				player2Count++;
			}
			$('#roundResults').append('<tr><th>Round '+round+'</th><td>'+resultText+'</td></tr>');
			round++;
		}
		if (round === 4) {
			if (player1Count>1) {
				finaResult = "Player 1 Winner!!!";
			}
			else if (player2Count>1) {
				finaResult = "Player 2 Winner!!!";
			}
			else if (player1Count==1 && player2Count==0) {
				finaResult = "Player 1 Winner!!!";
			}
			else if (player1Count==0 && player2Count==1) {
				finaResult = "Player 2 Winner!!!";
			}
			else {
				finaResult = "oops! its a tie";
			}
			$('#finalResult').removeClass('d-none').append('<h2 class="text-success">'+finaResult+'</h2>');
			$('#start').addClass('d-none');
			$('#restartButton').removeClass('d-none');
			$('#player1Result').text(player1Count);
			$('#player2Result').text(player2Count);
		}
	});
	$('#restartButton').click(function() {
		location.reload();
	});
});
function rounds(player1Attack, player2Attack) {
	var result = "";
	if (player1Attack === "rock" && player2Attack === "rock") {
		result = "0";
	}
	else if (player1Attack === "rock" && player2Attack === "paper") {
		result = "2";
	}
	else if (player1Attack === "rock" && player2Attack === "scissor") {
		result = "1";
	}
	else if (player1Attack === "paper" && player2Attack === "rock") {
		result = "1";
	}
	else if (player1Attack === "paper" && player2Attack === "paper") {
		result = "0";
	}
	else if (player1Attack === "paper" && player2Attack === "scissor") {
		result = "2";
	}
	else if (player1Attack === "scissor" && player2Attack === "rock") {
		result = "2";
	}
	else if (player1Attack === "scissor" && player2Attack === "paper") {
		result = "1";
	}
	else if (player1Attack === "scissor" && player2Attack === "scissor") {
		result = "0";
	}
	return(result);
}	