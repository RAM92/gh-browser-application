(function() {
  'use strict';

  angular
    .module('ghApplication')
    .controller('RepoController', RepoController);

  /** @ngInject */
  function RepoController($stateParams, $cacheFactory) {
    var repoCache = $cacheFactory.get('repo');
    this.data = repoCache.get($stateParams.id);
  }
})();
