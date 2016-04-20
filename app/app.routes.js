app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){

	$routeProvider.when('/home',
	{
		controller:'ctrlHome',
		templateUrl:'app/components/home/homeView.html'

	})
	.when('/thelist',
	{
		controller:'ctrlThelist',
		templateUrl:'app/components/thelist/thelistView.html'

	})
	.when('/themosaic',
	{
		controller:'ctrlMosaic',
		templateUrl:'app/components/mosaic/mosaicView.html'

	})
	.when('/thequiz',
	{
		controller:'ctrlQuiz',
		templateUrl:'app/components/quiz/quizView.html'

	})

	.when('/thegame/:gameId',
	{
		controller:'ctrlThegame',
		templateUrl:'app/components/thegame/thegameView.html'
	})
	.when('/update/:gameId',
	{
		controller:'ctrlUpdate',
		templateUrl:'app/components/updategame/updategameView.html'
	})

	.otherwise({redirectTo:'home'});

	$httpProvider.interceptors.push('LoadingInterceptor');

}]);




