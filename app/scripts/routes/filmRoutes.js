training.config(
  ['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
  	$stateProvider

  		.state('app', {
  			url: '/:timestamp',
  			views: {
  				'header': {
  				  templateUrl: '/scripts/views/partials/header.html',
  				  controller: 'headerController'
  				},
          'footer': {
  				  templateUrl: '/scripts/views/partials/footer.html',
  				  controller: 'footerController'
  				},
          'content@': {
            templateUrl: '/scripts/views/main.html',
            controller: 'mainController'
          }
  			}
  		});

    $urlRouterProvider
      .otherwise('/');
}]);
