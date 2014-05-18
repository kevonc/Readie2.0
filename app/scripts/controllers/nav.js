'use strict';

app.controller('NavCtrl', function ($scope, $location, Auth, User, Post) {
  $scope.post = {url: 'http://', date: '', star: '', category: ''};

  $scope.submitPost = function () {
    Post.create($scope.post).then(function () {
      $scope.post = {url: 'http://', date: '', star: '', category: ''};
    });
  };

  $scope.register = function () {
    Auth.register().then(function (authUser) {
      // console.log(authUser);
      User.setCurrentUser(authUser, authUser.displayName);
      $location.path('/');
    }, function (error) {
      $scope.error = error.toString();
    });
  };

  $scope.logout = function () {
    Auth.logout();
  };
});