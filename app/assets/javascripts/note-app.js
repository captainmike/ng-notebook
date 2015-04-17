'use strict';

angular.module('noteApp', ['ngNewRouter', 'noteApp.components', 'noteApp.configs'])
  .controller('AppController', ['$router', AppController]);

AppController.$routeConfig = [
  {path: '/', component: 'notebook'},
  {path: '/:key', component: 'notebook'}
];

function AppController($router) {}
