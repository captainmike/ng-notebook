'use strict';

angular.module('noteApp')
  .directive('noteFeatured', function() {
    return {
      scope: {},
      templateUrl: '/javascripts/note-app/templates/note-featured.html',
      controller: 'NoteFeaturedCtrl'
    };
  })
  .controller('NoteFeaturedCtrl', ['$scope', 'Note', function($scope, Note) {
    $scope.featured = Note.featured();
  }]);
