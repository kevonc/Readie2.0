'use strict';

app.factory('User', function ($firebase, FIREBASE_URL, $rootScope) {
  var ref = new Firebase(FIREBASE_URL + 'users');
  var users = $firebase(ref);

  var User = {
    setCurrentUser: function (authUser, displayName) {
      if (authUser) {
        $rootScope.currentUser = users.$child(authUser.id);
        $rootScope.currentUser.displayName = displayName;
        // console.log($rootScope.currentUser);
      }
    },
    getCurrent: function () {
      return $rootScope.currentUser;
    }
  };

  $rootScope.$on('$firebaseSimpleLogin:login', function (e, authUser) {
    User.setCurrentUser(authUser, authUser.displayName);
  });

  $rootScope.$on('$firebaseSimpleLogin:logout', function() {
    delete $rootScope.currentUser;
  });

  return User;
});