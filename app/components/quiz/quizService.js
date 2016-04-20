app.factory('quizService', ['$http', 'config', function($http, config){
	
	var factory = {};

	factory.loadDB = function(id){
		return $http.get(config.database);
	}

	factory.loadScores = function(){
		return $http.get('highscores.json');
	}
	
	factory.highScore = function(highscore){
		return $http.post('highscores.php',highscore);
	}
	
	return factory;

}])