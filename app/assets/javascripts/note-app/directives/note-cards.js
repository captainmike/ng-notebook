'use strict';

angular.module('noteApp')
  .directive('noteCards', function() {
    return {
      scope: {},
      templateUrl: '/javascripts/note-app/templates/note-cards.html',
      controller: 'NoteCardsCtrl'
    };
  })
  .controller('NoteCardsCtrl', ['$scope', 'Note', function($scope, Note) {
    $scope.notes = Note.all();
  }]);

