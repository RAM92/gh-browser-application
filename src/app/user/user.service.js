(function() {
  'use strict';

  angular
    .module('ghApplication')
    .service('ghUser', userService);

  /** @ngInject */
  function userService(Restangular) {
      return function (username) {
          username = username || 'RAM92'; //Default to me
          return Restangular.one('users', username).get();
      };
  }

})();
