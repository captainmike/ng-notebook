angular.module('noteApp')
  .directive('appName', ['config', function(config) {
    return {
      restrict: 'A',
      template: config.appName
    };
  }]);
