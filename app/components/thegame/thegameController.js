app.controller('ctrlThegame', ['$scope', '$routeParams', 'config', 'thegameService', 'ngDialog', function($scope, $routeParams, config, thegameService, ngDialog){

	thegameService.loadGame($routeParams.gameId).success(function(thelist){
		$scope.thegame = thelist[$routeParams.gameId];
		$scope.thumbpath = config.thumbpath;
		$scope.boxhdpath = config.boxhdpath;
		$scope.boxldpath = config.boxldpath;
		$scope.gameid = $routeParams.gameId;
	});

	$scope.clickToOpen = function () {
        ngDialog.open({ 
        	template: 'app/templates/imagePopup.html', 
        	className: 'ngdialog-theme-default',
        	scope: $scope
        	 });
    };


}]);

