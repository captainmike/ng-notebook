'use strict';

angular.module('noteApp', ['ngNewRouter', 'noteApp.components', 'noteApp.configs'])
  .controller('AppController', ['$router', AppController]);

AppController.$routeConfig = [
  {path: '/', component: 'home'}
];

function AppController($router) {}
