'use strict';

app.controller('PostsCtrl', function ($scope, Post) {
	$scope.posts = Post.all;

	$scope.deletePost = function (postId) {
    Post.delete(postId);
  };

});
