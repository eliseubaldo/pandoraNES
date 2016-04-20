app.controller('ctrlUpdate', ['$scope', '$routeParams', 'config', 'updategameService', function($scope, $routeParams, config, updategameService){

	
	updategameService.loadDB().success(function(thelist){
		$scope.thegame = thelist[$routeParams.gameId];
		$scope.thumbpath = config.thumbpath;		
	});

	$scope.updateGame = function(thegame){
		//console.log(thegame);
		updategameService.updateGame($routeParams.gameId,thegame).success(function(thegame){
			alert('Game Updated');


		});
	}

}]);

