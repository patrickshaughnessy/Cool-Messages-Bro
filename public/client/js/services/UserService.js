'use strict';

angular
  .module('app')
  .service('UserService', ['$http', function($http){

    this.getUserData = function(){
      return $http.get('/users');
    }

    this.populateBros = function(){
      return $http.get('/bros');
    }

    this.sendMessage = function(bro, message){
      var data = {};
      data.bro = bro;
      data.message = message;
      return $http.post('/bros', data);
    }

    this.getMessages = function(){
      return $http.get('/messages');
    }

  }])
