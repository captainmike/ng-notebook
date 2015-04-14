angular.module('noteApp')
  .directive('notebooks', function() {
    return {
      scope: {},
      templateUrl: "/javascripts/note-app/templates/notebooks.html",
      controller: 'NotebooksCtrl',
      controllerAs: 'NotebooksCtrl'
    };
  })
  .controller('NotebooksCtrl', ['Notebook', function(Notebook) {
    this.notebooks = Notebook.all();
  }]);
