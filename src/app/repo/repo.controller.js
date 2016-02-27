(function() {
  'use strict';

  angular
    .module('ghApplication')
    .controller('RepoController', RepoController);

  function RepoController(data) {
    this.data = data;
  }
})();
