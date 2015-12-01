'use strict';

angular
  .module('mwl.calendar')
  .filter('calendarTrustAsHtml', function($sce) {

    return function(text) {
      return $sce.trustAsHtml(text);
    };

  });
