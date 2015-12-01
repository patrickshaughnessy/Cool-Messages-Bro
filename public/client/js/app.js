'use strict';

angular
  .module('app', ['satellizer', 'ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$authProvider', function($stateProvider, $urlRouterProvider, $authProvider){
    console.log('here');
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'client/templates/home.html',
        controller: 'homeCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'client/templates/login.html',
        controller: 'loginCtrl'
      })
      .state('user', {
        url: '/user',
        templateUrl: 'client/templates/user.html',
        controller: 'userCtrl'
      })

    $authProvider.facebook({
      clientId: '416238451899324'
    });

    $authProvider.google({
      clientId: '426878752171-nlued7d3nho0dbvdkgpauusv3u0uq1dk.apps.googleusercontent.com'
    });

    $authProvider.github({
      clientId: 'a2707f585423b8d4d066'
    });

    // $authProvider.linkedin({
    //   clientId: 'LinkedIn Client ID'
    // });

    // $authProvider.instagram({
    //   clientId: 'Instagram Client ID'
    // });

  }])
