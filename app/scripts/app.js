'use strict';

var app = angular.module('readieApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ]).constant('FIREBASE_URL', 'https://readie69.firebaseio.com/');

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
