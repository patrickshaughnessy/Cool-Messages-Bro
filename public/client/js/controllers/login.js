'use strict';

angular
  .module('app')
  .controller('loginCtrl', ['$scope', '$auth', function($scope, $auth){
    console.log('loginCtrl')

    $scope.authenticate = function(provider){
      $auth.authenticate(provider);
    };
    
  }])
