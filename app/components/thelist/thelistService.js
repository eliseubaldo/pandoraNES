app.factory('thelistService', ['$http', 'config', function($http, config){
	
	var factory = {};

	factory.loadDB = function(id){
		return $http.get(config.database)
	}

	
	return factory;

}])