'use strict';

angular.module('noteApp.directives')
  .directive('notebookNav', function() {
    return {
      scope: {
        currentKey: '='
      },
      templateUrl: "./directives/notebook-nav/notebook-nav.html",
      controller: 'NotebooksController',
      controllerAs: 'notebookNav'
    };
  })
  .controller('NotebooksController', ['$scope', 'Notebook', function($scope, Notebook) {
    this.currentKey = $scope.currentKey;
    this.notebooks = Notebook.all();
  }]);
