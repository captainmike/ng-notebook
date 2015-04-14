angular.module('noteApp')
  .factory('Notebook', function() {
    return {
      all: function() {
        return [
          {
            name: 'FC Barcelona'
          },
          {
            name: 'Ruby on Rails'
          },
          {
            name: 'AngularJS'
          }
        ];
      }
    };
  });
