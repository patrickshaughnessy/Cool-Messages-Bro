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
      console.log('inside bros', res.data);
      $scope.bros = res.data;
    })

    $scope.sendMessage = function(broId, message){
      console.log(broId);
      UserService.sendMessage(broId, message).then(function(res){
        console.log(res);
      })
    }

    UserService.getMessages().then(function(res){
      console.log('messages', res.data);
      var user = res.data.user;
      console.log('user', user)

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
      console.log('conversations', conversations);
      $scope.conversations = conversations;
    })

    $scope.notSelf = function(bro, user){
      if (bro._id !== $scope.user._id){
        return true
      }
      return false;
    }

    $scope.viewBro = function(bro){
      console.log(bro._id);
      $scope.thisBro = bro._id
      $scope.thisBroName = bro.displayName
    }

  }])