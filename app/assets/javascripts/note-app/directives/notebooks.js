angular.module('noteApp')
  .directive('notebooks', function() {
    return {
      scope: {
        notebookKey: '='
      },
      templateUrl: "/javascripts/note-app/templates/notebooks.html",
      controller: 'NotebooksCtrl',
      controllerAs: 'NotebooksCtrl'
    };
  })
  .controller('NotebooksCtrl', ['$scope', 'Notebook', function($scope, Notebook) {
    this.notebookKey = $scope.notebookKey;
    this.notebooks = Notebook.all();
  }]);
