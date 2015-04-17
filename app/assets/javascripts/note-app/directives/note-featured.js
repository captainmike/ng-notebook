'use strict';

angular.module('noteApp')
  .directive('noteFeatured', function() {
    return {
      scope: {},
      templateUrl: '/javascripts/note-app/templates/note-featured.html',
      controller: 'NoteFeaturedCtrl',
      controllerAs: 'NoteFeaturedCtrl'
    };
  })
  .controller('NoteFeaturedCtrl', ['Note', function(Note) {
    this.featured = Note.featured();
  }]);
