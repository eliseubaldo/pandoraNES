app.factory('thegameService', ['$http', 'config', function($http, config){
	
	var factory = {};

	factory.loadGame = function(id){

	
	return $http.get(config.database)

	}

	
	return factory;

}])