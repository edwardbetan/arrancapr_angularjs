'use strict';

angular.module('store.view1', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {

    // Set up the states
    $stateProvider.state('view1', {
      url           : '/view1',
      title         : 'View 1',
      templateUrl   : 'view1/view1.html',
      controller    : 'StoreController'
    });
}])

.controller('StoreController', ['$scope', function($scope) {

        $scope.gem = {
            bla : 'Welcome to web development for ArrancaPR!'
        };

        $scope.webDevWelcome = 'Welcome to Web Development from ArrancaPR!';

        $scope.helloWorld = 'Hello World!';

}]);

//http://localhost:7000/#/view1