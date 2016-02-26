(function() {
  'use strict';

  angular
    .module('ghApplication')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController(ghUser) {
    this.user = ghUser();
  }
})();
