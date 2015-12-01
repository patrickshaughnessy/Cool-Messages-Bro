'use strict';

angular
  .module('app')
  .controller('userCtrl', ['$scope', '$auth', 'UserService', '$state', function($scope, $auth, UserService, $state){

    if (!$auth.isAuthenticated()){
      return $state.go('home');
    }

    UserService.getUserData().then(function(res){
      $scope.user = res.data;
    });

    UserService.populateBros().then(function(res){
      $scope.bros = res.data;
    })

    $scope.sendMessage = function(broId, message){
      UserService.sendMessage(broId, message).then(function(res){
        console.log(res);
      })
    }

    UserService.getMessages().then(function(res){
      var user = res.data.user;

      var conversations = {};
      res.data.messages.forEach(function(message){
        var sender = message.sender._id;
        var receiver = message.receiver._id;

        if (sender === user){
          conversations[receiver] = conversations[receiver] ? conversations[receiver].concat(message) : [message]
        }

        if (receiver === user){
          conversations[sender] = conversations[sender] ? conversations[sender].concat(message) : [message]
        }


      });
      $scope.conversations = conversations;

      $scope.notSelf = function(bro, user){
        if (bro._id !== $scope.user._id){
          return true
        }
        return false;
      }

      $scope.viewBro = function(bro){
        $scope.thisBro = bro._id
        $scope.thisBroName = bro.displayName
      }

      console.log('end of users', $scope.user, $scope.bros, $scope.thisBro)
    })


  }])
