'use strict';

angular.module('noteApp')
  .directive('noteCards', function() {
    return {
      scope: {
        notebookKey: '='
      },
      templateUrl: '/javascripts/note-app/templates/note-cards.html',
      controller: 'NoteCardsController',
      controllerAs: 'noteCard'
    };
  })
  .controller('NoteCardsController', ['$scope', 'Note', function($scope, Note) {
    this.notebookKey = $scope.notebookKey;
    this.notes = Note.all();
  }]);

