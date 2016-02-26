(function() {
  'use strict';

  angular
    .module('ghApplication')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('repo', {
        url: '/repo/:id',
        templateUrl: 'app/repo/repo.html',
        controller: 'RepoController',
        controllerAs: 'repo'
      });
  }

})();
