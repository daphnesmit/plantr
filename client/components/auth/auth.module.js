'use strict';

angular.module('plantrApp.auth', ['plantrApp.constants', 'plantrApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
