/**
 * Created by mihmb_000 on 5/18/2014.
 * AngularJs demo application
 */

angular.module('App', ['ngRoute', 'App.Controllers'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/users', {
                templateUrl: 'partials/users',
                controller: 'UsersListCtrl'
            })
            .otherwise({
                redirectTo: '/users'
            });
    }]);


//angular.module('App', ['ngRoute', 'App.Controllers'])
//    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//        $routeProvider
//            .when('/users', {
//                templateUrl: 'partials/users.jade',
//                controller: 'App.Users'
//            })
//            .otherwise({
//                redirectTo: '/users'
//            });
//        $locationProvider.html5Mode(true);
//    }]);