(function() {
  'use strict';

  angular
    .module('ghApplication')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController(data) {
    this.data=data;
  }
})();
