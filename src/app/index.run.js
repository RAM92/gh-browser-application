(function() {
  'use strict';

  angular
    .module('ghApplication')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, ghUser) {
    ghUser().then(function (data) {
      console.log(data);
    });
    $log.debug('runBlock end');
  }

})();
