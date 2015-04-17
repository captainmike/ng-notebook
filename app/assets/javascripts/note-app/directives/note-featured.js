'use strict';

angular.module('noteApp')
  .directive('noteFeatured', function() {
    return {
      scope: {},
      templateUrl: '/javascripts/note-app/templates/note-featured.html',
      controller: 'NoteFeaturedController',
      controllerAs: 'noteFeatured'
    };
  })
  .controller('NoteFeaturedController', ['Note', function(Note) {
    this.featured = Note.featured();
  }]);
