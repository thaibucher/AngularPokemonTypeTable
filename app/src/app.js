angular.module('main', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/index'});
}]);
