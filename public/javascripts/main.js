/**
 * Created by mihmb_000 on 5/18/2014.
 * AngularJs demo application
 */

angular.module('App', ['ngRoute', 'App.Controllers'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/misc', {
                templateUrl: 'partials/users',
                controller: 'UsersListCtrl'
            })
            .when('/', {
                templateUrl: 'partials/users',
                controller: 'UsersListCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        //$locationProvider.html5Mode(true);
    }]);