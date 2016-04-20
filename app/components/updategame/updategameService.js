app.factory('updategameService', ['$http', 'config', function($http, config){
	
	var factory = {};

	factory.loadDB = function(id){
		return $http.get(config.database)
	}

	factory.updateGame = function(id, thegame){
		//console.log(thegame);
		return $http.post('edit-include-game.php?id='+id,thegame)

	}
	
	return factory;

}])