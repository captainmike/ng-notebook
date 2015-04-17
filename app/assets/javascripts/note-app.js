'use strict';

angular.module('noteApp', ['ngNewRouter', 'noteApp.components', 'noteApp.configs'])
  .controller('AppController', ['$router', AppController]);

AppController.$routeConfig = [
  {path: '/', component: 'home'},
  {path: '/notebook', component: 'notebook'},
  {path: '/notebook/:key', component: 'notebook'}
];

function AppController($router) {}
