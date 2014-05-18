'use stict';

app.factory('Auth', function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {
  var ref = new Firebase(FIREBASE_URL);
  var auth = $firebaseSimpleLogin(ref);

  var Auth = {
    register: function() {
      return auth.$login('facebook', {
        rememberMe: true
      });
    },
    signedIn: function() {
      return auth.user !== null;
    },
    logout: function() {
      delete $rootScope.currentUser;
      auth.$logout();
    }
  };

  $rootScope.signedIn = function() {
    return Auth.signedIn();
  };

  return Auth;
});