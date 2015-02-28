'use strict';

/**
 * @ngdoc overview
 * @name lrnk2App
 * @description
 * # lrnk2App
 *
 * Main module of the application.
 */
angular
  .module('lrnk2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
