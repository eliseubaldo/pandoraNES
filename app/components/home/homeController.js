app.controller('ctrlHome', ['$scope', 'config', 'thelistService', 'quizService', 'dashboardService', function($scope, config, thelistService, quizService, dashboardService){

		// Load gameList from DB
		thelistService.loadDB().success(function(thelist){
			$scope.totalGames = thelist.length;		
		});

		//Load quiz Highscores
		quizService.loadScores().success(function(scores){
			var max;
			for(var i=0; i<scores.length; i++){
				if(!max || parseInt(scores[i]["score"]) > parseInt(max["score"])){
					max = scores[i];
				}
			}
			$scope.highScore = max;		
		});

		// Load last added Game
		dashboardService.loadLastgame().success(function(last){
			$scope.lastgame = last.title;		
		});


}]);

