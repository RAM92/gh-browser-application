(function() {
  'use strict';

  angular
    .module('ghApplication')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
