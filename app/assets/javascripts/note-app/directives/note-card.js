angular.module('noteApp')
  .directive('noteCard', function() {
    return {
      templateUrl: '/javascripts/note-app/views/note-card.html',
      scope: {
        heading: '=',
        body: '='
      }
    };
  });
