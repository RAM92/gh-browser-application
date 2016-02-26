(function() {
  'use strict';

  angular
    .module('ghApplication')
    .service('ghUser', userService);

  /** @ngInject */
  function userService($log, Restangular) {
      return function (username) {
          username = username || 'RAM92'; //Default to me
          return Restangular.one('users', username).get().then(function (user) {
              $log.log('Successfully got details for ' + username);
              var repoUrl = user.repos_url;
              return user.allUrl('repos', repoUrl).getList().then(function (repos) {
                  $log.log('Successfully got repos for ' + username);
                  user.repos = repos;
                  return user;
              });
          });
      };
  }

})();
