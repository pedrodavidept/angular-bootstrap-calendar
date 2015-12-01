'use strict';

var interact;
try {
  interact = require('interact.js');
} catch (e) {
  /* istanbul ignore next */
  interact = null;
}

angular
  .module('mwl.calendar')
  .constant('interact', interact);
