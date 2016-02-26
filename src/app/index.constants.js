/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('ghApplication')
    .constant('malarkey', malarkey)
    .constant('moment', moment);
    .constant('GITHUB_URL', 'https://api.github.com')

})();
