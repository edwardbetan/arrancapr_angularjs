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
                'price'         : 1200,
                'quantity'      : 5,
                'canPurchase'   : true,
                'soldOut'       : false,
                'image'         : 'http://www.shopnaser.com/images/diamonds_facts.png'
            },
            {
                'name'          : 'Ruby',
                'description'   : 'This is bright red!',
                'price'         : 800,
                'quantity'      : 4,
                'canPurchase'   : true,
                'soldOut'       : false,
                'image'         : 'https://devops.profitbricks.com/static/img/logo-ruby.png'
            },
            {
                'name'          : 'Emerald',
                'description'   : 'This is a nice green!',
                'price'         : 900,
                'quantity'      : 10,
                'canPurchase'   : false,
                'soldOut'       : false,
                'image'         : 'https://pbs.twimg.com/profile_images/1811370612/emerald.jpg'
            }
        ];

        // put together some code to sort the collection

}]);

// Diamond
//http://www.shopnaser.com/images/diamonds_facts.png

// Emerald
// https://pbs.twimg.com/profile_images/1811370612/emerald.jpg

// Ruby
//https://devops.profitbricks.com/static/img/logo-ruby.png

