'use strict';

// Declare app level module which depends on views, and components
angular.module('store', [
  'ui.router',
  'store.view1', // only this one
  'store.view2',
  'store.version'
]).
config(['$urlRouterProvider', '$stateProvider',
function($urlRouterProvider, $stateProvider) {

      $urlRouterProvider.otherwise("/view1");

}]);
