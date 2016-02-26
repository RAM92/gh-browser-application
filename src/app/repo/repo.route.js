(function() {
  'use strict';

  angular
    .module('ghApplication')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('repo', {
        url: '/repo',
        templateUrl: 'app/repo/repo.html',
        controller: function () {},
        controllerAs: 'user'
      });
  }

})();