angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'Home'
]);

angular.module('app').config(configuration);

function configuration($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'modules/home/views/list-home.client.view.html'
        });

    $urlRouterProvider.otherwise('/');
}