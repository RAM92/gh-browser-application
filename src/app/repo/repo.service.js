(function() {
  'use strict';

  angular
    .module('ghApplication')
    .service('ghRepo', repoService);

  /** @ngInject */
  function repoService($log, $cacheFactory, Restangular) {
      return function (username, repoName) {
          return Restangular.one('repos/' + username,  repoName).get();
      };
  }

})();
