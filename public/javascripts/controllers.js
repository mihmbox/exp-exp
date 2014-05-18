/**
 * Created by mihmb_000 on 5/18/2014.
 */

var controllers = angular.module('App.Controllers', []);
controllers.controller('UsersListCtrl', ['$scope', function($scope) {
    $scope.phones = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'}
    ];
}]);
