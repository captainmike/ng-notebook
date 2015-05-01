'use strict';

angular.module('noteApp.directives')
  .directive('notebookNav', function() {
    return {
      scope: {
        notebookKey: '='
      },
      templateUrl: "./directives/notebook-nav/notebook-nav.html",
      controller: 'NotebooksController',
      controllerAs: 'notebookNav'
    };
  })
  .controller('NotebooksController', ['$scope', 'Notebook', function($scope, Notebook) {
    this.notebookKey = $scope.notebookKey;
    this.notebooks = Notebook.all();
  }]);
