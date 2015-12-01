'use strict';

angular
  .module('app')
  .controller('loginCtrl', ['$scope', '$auth', '$state', function($scope, $auth, $state){
    console.log('loginCtrl')

    $scope.authenticate = function(provider){
      $auth.authenticate(provider)
      .then(function(res){
        console.log(res);
        $state.go('user');
      })
      .catch(function(err){
        console.error(err);
      });
    };

  }])
