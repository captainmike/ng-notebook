angular.module('noteApp')
  .directive('noteFeatured', function() {
    return {
      templateUrl: '/javascripts/note-app/views/note-featured.html',
      scope: {
        heading: '=',
        body: '='
      }
    };
  });
