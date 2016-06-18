'use strict';

angular.module('plantrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('plants', {
        url: '/plants',
        template: '<plants></plants>',
        authenticate: true
      });
  });
