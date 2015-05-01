angular.module('noteApp.directives')
  .directive('appTitle', function() {
    return {
      scope: {},
      templateUrl: './directives/app-title/app-title.html',
      controller: 'AppTitleController',
      controllerAs: 'appTitle'
    };
  })
  .controller('AppTitleController', ['config', function(config) {
    this.title = config.appName;
  }]);
