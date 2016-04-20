app.controller('ctrlQuiz', ['$scope', '$timeout', 'config', 'quizService', 'utilitiesService' , function($scope, $timeout, config, quizService, utilitiesService){

	var quizDB = {};
	$scope.rndGameThumb;
	var rndgame = {};
	$scope.score = 0;
	$scope.tries = 3;
	$scope.quizAnsResult = false;
	$scope.newQuestion = false; // Animation purposes
	$scope.verifying = false;
	$scope.gameOver = false;
	var inaRow = 0; // if reaches 3 then bonus
	lastQuestion = false; // check if last was a good answer for bonus
	$scope.bonusPoints = false;
	$scope.submited = false;
	$scope.playing = false;

	quizService.loadDB().success(function(thelist){
		quizDB = thelist;
		$scope.thumbpath = config.thumbpath;
	});

	quizService.loadScores().success(function(highscores){
		$scope.highScores = highscores;		
	});

	$scope.startQuiz = function(){
		$scope.playing = true;
		$scope.score = 0;
		$scope.tries = 3;
		$scope.verifying = false;
		$scope.quizAnsResult = undefined;
		$scope.newQuestion = true;
		$scope.gameOver = false;
		lastQuestion = false;
		$scope.submited = false;

		inaRow = 0;
		nextQuestion();	
	}

	var nextQuestion = function(){

		
		// Check if gameover (life <0)
		if ($scope.tries < 0){
			$scope.gameOver = true;	
			return false;
		};

		// resets
		$scope.verifying = false;
		$scope.quizAnsResult = undefined;
		$scope.newQuestion = true;		

		// Pick a game for question
		var rnd = Math.floor(Math.random() * quizDB.length);
		$scope.rndGameThumb = quizDB[rnd].thumb;
		rndgame = quizDB[rnd];
		$scope.answers = generateRndAnswer("title");
	}

	$scope.checkQuestion = function(answer){
		
		$scope.verifying = true;

		if (answer == rndgame.title) {
			$scope.quizAnsResult = "Right!";
			verifyBonus();			
		} else{
			$scope.quizAnsResult = "Wrong!";
			$scope.tries--;
			lastQuestion = false;
		};

		$scope.newQuestion = false;
		
		// if showing bonus await, reset and continue, else wait and continue
		if ($scope.bonusPoints == true) {
			$timeout(function(){$scope.bonusPoints = false; nextQuestion()}, 5000);
		} else{
			$timeout(nextQuestion, 3000);		
		};
		
	}

	var verifyBonus = function(){
		if (lastQuestion == true ) {
				inaRow++;							
			} else{
				inaRow = 0;				
			};

		if(inaRow==2){
			$scope.bonusPoints = true;
			$scope.score +=3;
			lastQuestion = false
			inaRow = 0;
		}else{
			lastQuestion = true;		
			$scope.score++;
		}
	}	

	var generateRndAnswer = function(itemCat){
			var generatedAsw = [];
		
			for (var i = 0; i < 4; i++) {
				var rnd = Math.floor(Math.random() * quizDB.length);
				generatedAsw.push({"answer":quizDB[rnd][itemCat]});		
			};

			// also push the right answer
			generatedAsw.push({"answer":rndgame[itemCat]});
			utilitiesService.shuffle(generatedAsw);

		return generatedAsw;
	}

	$scope.addScore = function(newhighScore){

		newhighScore.score = $scope.score;	
		$scope.highScores.push(newhighScore);

		quizService.highScore(newhighScore).success(function(){
			quizService.loadScores().success(function(highscores){
				$scope.highScores = highscores;		
			});	
		});
		
		$scope.scoresForm.$setPristine();
		$scope.newhighScore = null;
		$scope.submited = true;

		
		
	}


}])