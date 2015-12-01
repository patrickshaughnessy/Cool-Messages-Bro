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
      console.log('messages', res.data);
      // $scope.messages = res.data;
      var user = res.data.user;

      var conversations = {};
      res.data.messages.forEach(function(message){
        var sender = message.sender._id;
        var receiver = message.receiver._id;

        // conversation exists
        if (conversations[sender]){
          conversations[sender].push(message);

        // first entry in conversation
        } else {
          // create a new entry at sender
          conversations[sender] = [message];

          // 

        }


      });
      console.log('conversations', conversations);
      $scope.conversations = conversations;
    })

  }])
