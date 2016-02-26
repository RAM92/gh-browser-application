(function() {
  'use strict';

  angular
    .module('ghApplication')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/user/',
        templateUrl: 'app/user/user.html',
        controller: 'UserController',
        controllerAs: 'user',
        resolve: {
          
          /** @ngInject */
          data: function (ghUser) {
            return ghUser();
          }
        }
      });
  }

})();
