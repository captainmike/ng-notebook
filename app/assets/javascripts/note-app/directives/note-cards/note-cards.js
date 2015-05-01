'use strict';

angular.module('noteApp.directives')
  .directive('noteCards', function() {
    return {
      scope: {
        notebookKey: '='
      },
      templateUrl: './directives/note-cards/note-cards.html',
      controller: 'NoteCardsController',
      controllerAs: 'noteCard'
    };
  })
  .controller('NoteCardsController', ['$scope', 'Note', function($scope, Note) {
    this.notebookKey = $scope.notebookKey;
    this.notes = Note.all();
  }]);

