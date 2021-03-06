'use strict';

angular
  .module('app')
  .controller('navCtrl', ['$scope', '$auth', '$state', function($scope, $auth, $state){

    $scope.isAuthenticated = function(){
      return $auth.isAuthenticated();
    };

    $scope.logout = function(){
      $auth.logout();
      $state.go('home');
    }
  }])
