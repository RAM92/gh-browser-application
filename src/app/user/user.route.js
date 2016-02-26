(function() {
  'use strict';

  angular
    .module('ghApplication')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('user', {
        url: '/user',
        templateUrl: 'app/user/user.html',
        controller: function () {},
        controllerAs: 'user'
      });
  }

})();