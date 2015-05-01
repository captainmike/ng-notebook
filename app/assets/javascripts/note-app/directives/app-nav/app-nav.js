'use strict';

angular.module('noteApp.directives')
  .directive('appNav', function() {
    return {
      scope: {
        currentKey: '='
      },
      templateUrl: "./directives/app-nav/app-nav.html",
      controller: 'AppNavController',
      controllerAs: 'appNav'
    };
  })
  .controller('AppNavController', ['$scope', function($scope) {
    this.navItems = [
      {key: 'about-us', name: 'About Us'}
    ];
  }]);
