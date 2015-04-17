'use strict';

angular.module('noteApp')
  .directive('noteCards', function() {
    return {
      scope: {},
      templateUrl: '/javascripts/note-app/templates/note-cards.html',
      controller: 'NoteCardsCtrl',
      controllerAs: 'NoteCardsCtrl'
    };
  })
  .controller('NoteCardsCtrl', ['Note', function(Note) {
    this.notes = Note.all();
  }]);

