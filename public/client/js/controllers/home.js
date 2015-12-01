'use strict';

angular
  .module('app')
  .controller('homeCtrl', ['$scope', '$auth', function($scope, $auth){
    $scope.greet = 'hello home'
  }])
