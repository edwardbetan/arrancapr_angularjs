'use strict';

angular.module('store.view2', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {

    // Set up the states
    $stateProvider.state('view2', {
      url: '/view2',
      title: 'View 2',
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl',

    });

}])

.controller('View2Ctrl', [function() {

}]);