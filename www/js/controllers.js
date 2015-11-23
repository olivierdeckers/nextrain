angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  $http.get('http://api.irail.be/connections/?to=Mechelen&from=Leuven&format=json').then(function(response) {
    $scope.connections = response.data.connection;

    angular.forEach($scope.connections, function(connection) {
      connection.arrival.date = new Date(parseInt(connection.arrival.time)*1000);
      connection.departure.date = new Date(parseInt(connection.departure.time)*1000);
    });

    console.log($scope.connections);
  });
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
