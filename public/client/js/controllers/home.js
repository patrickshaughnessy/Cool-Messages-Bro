'use strict';

angular
  .module('app')
  .controller('homeCtrl', ['$scope', '$auth', function($scope, $auth){
    console.log('homeCtrl')
    $scope.greet = 'hello home'
  }])
