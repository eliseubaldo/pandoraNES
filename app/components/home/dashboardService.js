app.factory('dashboardService', ['$http', 'config', function($http, config){
	
	var factory = {};

	factory.loadLastgame = function(){
		return $http.get(config.lastaddedgame)
	}

	
	return factory;

}])