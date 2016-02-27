(function() {
  'use strict';

  angular
    .module('ghApplication')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('repo', {
        url: '/repo/:user/:repo',
        templateUrl: 'app/repo/repo.html',
        controller: 'RepoController',
        controllerAs: 'repo',
        resolve: {
          
          /** @ngInject */
          data: function (ghRepo, $stateParams, $cacheFactory) {
            var cache = $cacheFactory.get('repo');
            var user = $stateParams.user;
            var repo = $stateParams.repo;
            var cachedRepo;
            if (cache) {
              cachedRepo = cache.get(user + '/' + repo);
            }
            return cachedRepo || ghRepo(user, repo);
          }
        }
      });
  }

})();
