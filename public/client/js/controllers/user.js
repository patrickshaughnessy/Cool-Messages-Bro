'use strict';

angular
  .module('app')
  .controller('userCtrl', ['$scope', '$auth', 'UserService', '$state', function($scope, $auth, UserService, $state){
    console.log('userCtrl')
    if (!$auth.isAuthenticated()){
      return $state.go('home');
    }

    UserService.getUserData().then(function(res){
      $scope.user = res.data;
    });

    UserService.populateBros().then(function(res){
      console.log('inside bros', res);
      $scope.bros = res.data;
    })

    $scope.sendMessage = function(bro, message){
      UserService.sendMessage(bro, message).then(function(res){
        console.log(res);
      })
    }

    UserService.getMessages().then(function(res){
      console.log(res);
      $scope.messages = res.data
    })

  }])
