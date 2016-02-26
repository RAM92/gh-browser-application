(function() {
  'use strict';

  angular
    .module('ghApplication')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, RestangularProvider, GITHUB_URL) {
    // Enable log
    $logProvider.debugEnabled(true);
    
    //Set base url for API
    RestangularProvider.setBaseUrl(GITHUB_URL);
    //Save API calls
    RestangularProvider.setDefaultHttpFields({cache: true});

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
