app.controller('ctrlMosaic', ['$scope', '$routeParams', 'config', 'thelistService', 'utilitiesService' , function($scope, $routeParams,config,thelistService,utilitiesService){

	
	// Load gameList from DB
	thelistService.loadDB().success(function(thelist){
		$scope.thelist = thelist;
		$scope.boxhdpath = config.boxhdpath;
		$scope.boxldpath = config.boxldpath;
		$scope.themosaic = utilitiesService.shuffle(thelist);

	});

	$scope.rndColor = function(){
		var rnd = Math.floor(Math.random() * 4);

		if(rnd==0){ return "bgGradLight" }
		if(rnd==1){ return "bgGradLightTop" }
		if(rnd==2){ return "bgGradDark" }
		if(rnd==3){ return "bgGradDarkTop" }
	}	


}]);

