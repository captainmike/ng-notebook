'use strict';

angular.module('noteApp', ['ngNewRouter', 'noteApp.components', 'noteApp.configs'])
  .controller('AppController', ['$router', AppController]);

angular.module('noteApp.components', ['noteApp.directives']);
angular.module('noteApp.directives', ['noteApp.services']);
angular.module('noteApp.services', []);

AppController.$routeConfig = [
  {path: '/', component: 'home'},
  {path: '/notebook', component: 'notebook'},
  {path: '/notebook/:key', component: 'notebook'}
];

function AppController($router) {}
