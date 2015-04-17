angular.module('noteApp')
  .directive('notebooks', function() {
    return {
      scope: {
        notebookKey: '='
      },
      templateUrl: "/javascripts/note-app/templates/notebook-nav.html",
      controller: 'NotebooksController',
      controllerAs: 'notebookNav'
    };
  })
  .controller('NotebooksController', ['$scope', 'Notebook', function($scope, Notebook) {
    this.notebookKey = $scope.notebookKey;
    this.notebooks = Notebook.all();
  }]);
