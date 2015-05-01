'use strict';

angular.module('noteApp.services')
  .factory('Notebook', function() {
    return {
      all: function() {
        return [
          {
            name: 'FC Barcelona',
            key: 'fc-barcelona'
          },
          {
            name: 'Ruby on Rails',
            key: 'ruby-on-rails'
          },
          {
            name: 'AngularJS',
            key: 'angular-js'
          }
        ];
      }
    };
  });
