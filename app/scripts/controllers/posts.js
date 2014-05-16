'use strict';

app.controller('PostsCtrl', function ($scope, Post) {
	$scope.posts = Post.all;

	console.log($scope.posts);

	$scope.post = {url: 'http://', date: '', star: '', category: ''};

	$scope.submitPost = function () {
		Post.create($scope.post).then(function () {
			$scope.post = {url: 'http://', date: '', star: '', category: ''};
		});
	};

	$scope.deletePost = function (postId) {
    Post.delete(postId);
  };

});
