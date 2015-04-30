angular.module('noteApp.components', [])
  .controller('NotebookController', ['$routeParams', function($routeParams) {
    this.key = $routeParams.key || 'default-key';
  }]);
