'use strict';

//filename: view1.js

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

        $scope.gemsArr = [ // 3 elements
            {
                'name'          : 'Diamond',
                'description'   : 'This is a beautiful gem!',
                'price'         : '$1,200.00',
                'quantity'      : 5,
                'canPurchase'   : true,
                'soldOut'       : false
            },
            {
                'name'          : 'Ruby',
                'description'   : 'This is bright red!',
                'price'         : '$800.00',
                'quantity'      : 4,
                'canPurchase'   : true,
                'soldOut'       : false
            },
            {
                'name'          : 'Esmeralda',
                'description'   : 'This is a nice green!',
                'price'         : '$900.00',
                'quantity'      : 10,
                'canPurchase'   : false,
                'soldOut'       : false
            }
        ];

}]);

//http://localhost:7000/#/view1