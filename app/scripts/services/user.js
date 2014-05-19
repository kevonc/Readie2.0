'use strict';

app.factory('User', function ($firebase, FIREBASE_URL, $rootScope) {
  var ref = new Firebase(FIREBASE_URL + 'users');
  var users = $firebase(ref);

  var User = {
    setCurrentUser: function (authUser, displayName) {
      if (authUser) {
        $rootScope.currentUser = users.$child(authUser.id);
        $rootScope.currentUser.displayName = displayName;
      }
    },
    findById: function (id) {
      if (id) {
        return users.$child(id);
      }
    },
    getCurrent: function () {
      return $rootScope.currentUser;
    },
    signedIn: function () {
      return $rootScope.currentUser !== undefined;
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