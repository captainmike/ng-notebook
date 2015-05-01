'use strict';

angular.module('noteApp.directives')
  .directive('noteFeatured', function() {
    return {
      scope: {},
      templateUrl: './directives/note-featured/note-featured.html',
      controller: 'NoteFeaturedController',
      controllerAs: 'noteFeatured'
    };
  })
  .controller('NoteFeaturedController', ['Note', function(Note) {
    this.featured = Note.featured();
  }]);
