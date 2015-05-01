'use strict';

angular.module('noteApp.components')
  .controller('HomeController', ['$routeParams', function($routeParams) {
    this.page = $routeParams.page;
    this.page_path = "./components/home/pages/" + ($routeParams.page || 'home') + ".html";
  }]);
