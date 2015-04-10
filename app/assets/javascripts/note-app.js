'use strict';

angular.module('noteApp', [])
  .constant('config', {
    appName: 'ng-notebook'
  })

  .controller('NotesCtrl', ['$scope', 'Note', function($scope, Note) {
    $scope.notes = Note.all();
    $scope.featured = Note.featured();
  }]);
