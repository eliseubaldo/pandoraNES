app.controller('ctrlThelist', ['$scope', '$routeParams', 'config', 'thelistService', function($scope, $routeParams,config,thelistService){

	// Initialize Pagination Directive
	$scope.currentPage = 1;
	$scope.pageSize = 10;

	// Load gameList from DB
	thelistService.loadDB().success(function(thelist){
		$scope.thelist = thelist;
		$scope.thumbpath = config.thumbpath;		
	});


}]);

