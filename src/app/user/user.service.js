(function() {
  'use strict';

  angular
    .module('ghApplication')
    .service('ghUser', userService);

  /** @ngInject */
  function userService($log, $cacheFactory, Restangular) {
      return function (username) {
          username = username || 'RAM92'; //Default to me
          return Restangular.one('users', username).get().then(function (user) {
              $log.log('Successfully got details for ' + username);
              var repoUrl = user.repos_url;
              return user.allUrl('repos', repoUrl).getList().then(function (repos) {
                  $log.log('Successfully got repos for ' + username);
                  user.repos = repos;
                  var repoCache = $cacheFactory.get('repo') || $cacheFactory('repo');
                  repos.forEach(function (repo) {
                      var idStr = username + '/' + repo.name;
                      if (!repoCache.get(idStr)) {
                          repoCache.put(idStr, repo);
                      }
                  });
                  return user;
              });
          });
      };
  }

})();
